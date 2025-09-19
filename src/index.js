'use strict';

console.log('Hello World!');

import React from 'react';
import { render } from 'react-dom';

import Title from './app';

//var Title =  require('./app');
// console.log(sum(1, 3));

render(
	<Title />,
	document.querySelector('[data-js="app"]')
)
