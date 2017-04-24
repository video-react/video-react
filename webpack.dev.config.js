var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var env = process.env.WEBPACK_BUILD || 'development';

var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackDevConfig = require('./webpack.base.config')('development');
var webpackProdConfig = require('./webpack.base.config')('production');

var paths = [
  '/',
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
  '/customize/',
  '/customize/enable-disable-components/',
  '/customize/customize-source/',
  '/404.html'
];

var config = [{
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000,
    stats: {
      chunks: false
    }
  },
  entry: {
    main: ['babel-polyfill', './docs/lib/app']
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: './build',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      { from: './docs/static', to: 'assets' },
      { from: './dist', to: 'assets' },
      {
        from: './dist/video-react.css',
        to: `assets/video-react-${pkg.version}.css`,
        transform: content => content.replace('video-react.css.map', `video-react-${pkg.version}.css.map`)
      },
      { from: './dist/video-react.css.map', to: `assets/video-react-${pkg.version}.css.map` },
      {
        from: './dist/video-react.js',
        to: `assets/video-react-${pkg.version}.js`,
        transform: content => content.replace('video-react.js.map', `video-react-${pkg.version}.js.map`)
      },
      { from: './dist/video-react.js.map', to: `assets/video-react-${pkg.version}.js.map` },
      {
        from: './dist/video-react.min.js',
        to: `assets/video-react-${pkg.version}.min.js`,
        transform: content => content.replace('video-react.min.js.map', `video-react-${pkg.version}.min.js.map`)
      },
      { from: './dist/video-react.min.js.map', to: `assets/video-react-${pkg.version}.min.js.map` },
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, {}),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('/assets/style.css')
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader?cacheDirectory'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      { test: /\.(ttf|eot|svg)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'bootstrap-scss': path.join(__dirname, 'node_modules/bootstrap/scss/bootstrap.scss'),
      'video-react-scss': path.resolve('./styles/scss/video-react.scss'),
      'video-react': path.resolve('./src')
    }
  }
}];

if (env === 'development') {
  config.push(webpackDevConfig);
  config.push(webpackProdConfig);
} else {
  config[0].plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      minimize: true,
      sourceMap: true,
      compress: {
        warnings: false
      },
      mangle: true
    }
  ));
}

module.exports = config;
