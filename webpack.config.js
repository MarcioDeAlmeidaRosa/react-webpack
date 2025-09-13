'use strict';
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/', // mantém /static/bundle.js // diretório em memória
    clean: true,
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: { directory: __dirname }, // serve o index da pasta public
    port: 8080,
    open: true,
	historyApiFallback: true,
  },
};
