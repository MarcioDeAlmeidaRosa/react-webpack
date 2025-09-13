'use strict';

console.log('Hello World!');

var React = require('react');
var ReactDOM = require('react-dom');
var Title =  require('./app');
// console.log(sum(1, 3));

ReactDOM.render(
	React.createElement(Title),
	document.querySelector('[data-js="app"]')
)
