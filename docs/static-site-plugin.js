// Pre-renders the docs app to static HTML, one file per path.
//
// Replaces static-site-generator-webpack-plugin, which is unmaintained and depends on vulnerable
// packages. The entry bundle must be a UMD library whose default export is
// `(locals, callback) => callback(error, html)`.
const path = require('path');
const vm = require('vm');

const PLUGIN_NAME = 'StaticSitePlugin';

function pathToAssetName(outputPath) {
  const fileName = outputPath.replace(/^(\/|\\)/, '');
  return /\.html?$/i.test(fileName)
    ? fileName
    : path.posix.join(fileName, 'index.html');
}

class StaticSitePlugin {
  constructor({ paths = ['/'], globals = {} } = {}) {
    this.paths = paths;
    this.globals = globals;
  }

  apply(compiler) {
    const { Compilation, sources } = compiler.webpack;

    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        },
        async () => {
          try {
            const render = this.loadRenderer(compilation);
            await Promise.all(
              this.paths.map(async outputPath => {
                const assetName = pathToAssetName(outputPath);
                if (compilation.getAsset(assetName)) {
                  return;
                }
                const html = await new Promise((resolve, reject) => {
                  render({ path: outputPath }, (err, output) =>
                    err ? reject(err) : resolve(output)
                  );
                });
                // `minimized` keeps webpack's HTML minifier from rewriting the server-rendered
                // markup that the client then hydrates.
                compilation.emitAsset(assetName, new sources.RawSource(html), {
                  minimized: true
                });
              })
            );
          } catch (err) {
            compilation.errors.push(err);
          }
        }
      );
    });
  }

  loadRenderer(compilation) {
    const entrypoint = compilation.entrypoints.values().next().value;
    const fileName = [...entrypoint.getFiles()].find(file =>
      file.endsWith('.js')
    );
    const asset = fileName && compilation.getAsset(fileName);
    if (!asset) {
      throw new Error(`${PLUGIN_NAME}: entry bundle not found`);
    }

    const module = { exports: {} };
    const sandbox = {
      ...globalThis,
      ...this.globals,
      module,
      exports: module.exports
    };
    vm.runInNewContext(asset.source.source().toString(), sandbox, {
      filename: fileName
    });

    const exported = module.exports;
    const render =
      exported && Object.prototype.hasOwnProperty.call(exported, 'default')
        ? exported.default
        : exported;
    if (typeof render !== 'function') {
      throw new Error(
        `${PLUGIN_NAME}: "${fileName}" must export a render function (is output.library.type "umd"?)`
      );
    }
    return render;
  }
}

module.exports = StaticSitePlugin;
