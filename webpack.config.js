const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StaticSitePlugin = require('./docs/static-site-plugin');

const env = process.env.WEBPACK_BUILD || process.env.NODE_ENV || 'development';

const paths = [
  '/',
  '/getting-started/',
  '/components/',
  '/components/player/',
  '/components/shortcut/',
  '/components/big-play-button/',
  '/components/poster-image/',
  '/components/loading-spinner/',
  '/components/control-bar/',
  '/components/play-toggle/',
  '/components/forward-control/',
  '/components/replay-control/',
  '/components/volume-menu-button/',
  '/components/playback-rate-menu-button/',
  '/components/captioned-video',
  '/customize/',
  '/customize/enable-disable-components/',
  '/customize/customize-source/',
  '/customize/customize-component/',
  '/404.html'
];

const config = {
  mode: env,
  devtool: 'source-map',
  devServer: {
    static: './build',
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
    // The bundle is also evaluated in Node to pre-render pages, so it can't include the
    // dev server's browser client.
    client: false,
    hot: false,
    liveReload: false,
    webSocketServer: false
  },
  entry: './docs/lib/app',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
    publicPath: '/',
    library: {
      name: 'VideoReact',
      type: 'umd'
    },
    globalObject: 'this',
    clean: true
  },
  plugins: [
    // Files are copied as-is (`minimized` stops webpack re-minifying them), so e.g. the
    // unminified dist/video-react.js stays unminified.
    new CopyWebpackPlugin({
      patterns: [
        { from: './docs/static', to: 'assets' },
        { from: './dist', to: 'assets' },
        { from: './docs/videojs-demo/dist', to: 'assets/videojs' },
        { from: './docs/llms.txt', to: 'llms.txt' },
        // Browsers request /favicon.ico at the site root regardless of <link> tags.
        { from: './docs/static/favicon.ico', to: 'favicon.ico' },
        { from: './docs/static/favicon.svg', to: 'favicon.svg' },
        {
          from: './docs/static/apple-touch-icon.png',
          to: 'apple-touch-icon.png'
        }
      ].map(pattern => ({ ...pattern, info: { minimized: true } }))
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new StaticSitePlugin({
      paths,
      globals: {
        window: {}
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    })
  ],
  module: {
    rules: [
      {
        // Example source shown in the docs: `require('../examples/Foo?raw')`.
        // Not `asset/source`: webpack minifies that when the file is JavaScript.
        resourceQuery: /raw/,
        use: {
          loader: 'raw-loader',
          options: { esModule: false }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resourceQuery: { not: [/raw/] },
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'assets'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'assets'
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Bootstrap 4's Sass predates these deprecations (all for Dart Sass 2/3).
                silenceDeprecations: [
                  'abs-percent',
                  'color-functions',
                  'global-builtin',
                  'if-function',
                  'import',
                  'slash-div'
                ]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'bootstrap-scss': path.resolve('./docs/lib/bootstrap.scss'),
      'video-react-scss': path.resolve('./styles/scss/video-react.scss'),
      'video-react': path.resolve('./src')
    },
    fallback: {
      fs: false
    },
    modules: [path.resolve('./src'), 'node_modules']
  },
  optimization: {
    emitOnErrors: false
  }
};

module.exports = config;
