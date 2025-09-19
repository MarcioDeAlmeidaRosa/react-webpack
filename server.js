'use strict'

const webpack = require('webpack');
const WebpacoDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


new WebpacoDevServer(webpack(config),{
	publicPath: config.output.publicPath,
	hot: true, 
	historyFallback: true,
	stats: {colors: true}
}).listen(3000, (err)=>{
	if (err){
		return console.log(err);
	}
	return console.log('Listening on http://localhost:3000');
});