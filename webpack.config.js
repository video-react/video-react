const env = process.env.WEBPACK_BUILD || 'development';
const webpackConfig = require('./webpack.base.config')(env);

module.exports = webpackConfig;
