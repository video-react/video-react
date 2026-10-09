// Pre-renders the docs app to static HTML, one file per path.
//
// Replaces static-site-generator-webpack-plugin, which is unmaintained and depends on vulnerable
// packages. The entry bundle must be a UMD library whose default export is
// `(locals, callback) => callback(error, html)`.
const path = require('node:path');
const vm = require('node:vm');

const PLUGIN_NAME = 'StaticSitePlugin';

function pathToAssetName(outputPath) {
  const fileName = outputPath.replace(/^[/\\]/, '');
  return /\.html?$/i.test(fileName)
    ? fileName
    : path.posix.join(fileName, 'index.html');
}

function renderToString(render, locals) {
  return new Promise((resolve, reject) => {
    render(locals, (err, html) => (err ? reject(err) : resolve(html)));
  });
}

class StaticSitePlugin {
  constructor({ paths = ['/'], globals = {} } = {}) {
    this.paths = paths;
    this.globals = globals;
  }

  apply(compiler) {
    const { Compilation } = compiler.webpack;

    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        },
        () => this.emitPages(compiler, compilation)
      );
    });
  }

  async emitPages(compiler, compilation) {
    const { RawSource } = compiler.webpack.sources;

    try {
      const render = this.loadRenderer(compilation);
      const pages = this.paths
        .map(outputPath => ({ outputPath, name: pathToAssetName(outputPath) }))
        .filter(({ name }) => !compilation.getAsset(name));

      const htmls = await Promise.all(
        pages.map(({ outputPath }) =>
          renderToString(render, { path: outputPath })
        )
      );

      pages.forEach(({ name }, i) => {
        // `minimized` keeps webpack's HTML minifier from rewriting the server-rendered
        // markup that the client then hydrates.
        compilation.emitAsset(name, new RawSource(htmls[i]), {
          minimized: true
        });
      });
    } catch (err) {
      compilation.errors.push(err);
    }
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
    // Pre-rendering means running the bundle this compilation just built from the repo's own
    // source; no external input is evaluated.
    const code = asset.source.source().toString();
    vm.runInNewContext(code, sandbox, { filename: fileName }); // NOSONAR

    const exported = module.exports;
    const render =
      exported && Object.hasOwn(exported, 'default')
        ? exported.default
        : exported;
    if (typeof render !== 'function') {
      throw new TypeError(
        `${PLUGIN_NAME}: "${fileName}" must export a render function (is output.library.type "umd"?)`
      );
    }
    return render;
  }
}

module.exports = StaticSitePlugin;
