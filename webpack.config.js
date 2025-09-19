'use strict';
const path = require('path');

module.exports = {
  devtool: 'source-map', //configuração para mapear os arquivos no browser
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' // mantém /static/bundle.js // diretório em memória
  },
  module: {
	loaders: [{
	  test: /\.js$/,
	  exclude: /node_modules/,
	  include: /src/,
	  loader: 'babel'
	}]
  }
}