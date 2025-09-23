'use strict';
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

module.exports = validate({
  devtool: 'source-map', //configuração para mapear os arquivos no browser
  
  entry: [
    'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	path.join(__dirname, 'src', 'index')
  ],
  
  plugins: [
	new webpack.HotModuleReplacementPlugin()
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' // mantém /static/bundle.js // diretório em memória
  },
  
  module: {
	preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
	  include: /src/,
      loader: 'eslint'
    }],
	
	loaders: [{
	  test: /\.js$/,
	  exclude: /node_modules/,
	  include: /src/,
	  loader: 'babel'
	}]
  }
});