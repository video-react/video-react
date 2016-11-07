'use strict';
const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const libraryName = 'video-react';

module.exports = function (env) {
  let outputFile;
  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('video-react.css')
  ];

  if (env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin(
      {
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: true
      }
    ));
    outputFile = libraryName.toLowerCase() + '.min.js';
  } else {
    outputFile = libraryName.toLowerCase() + '.js';
  }

  const config = {
    devtool: 'source-map',
    entry: [
      __dirname + '/src/index.js',
      __dirname + '/styles/less/video-react.less'
    ],
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      }
    ],
    module: {
      loaders: [
        {
          test: /\.(json)$/,
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
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
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
      alias: {
        'video-react-less': './styles/video-react.less',
        'video-react': 'src/index'
      },
      extensions: ['', '.js', '.json'],
      root: [
        path.resolve('./src')
      ]
    },
    plugins: plugins
  };

  return config;
};
