'use strict';

console.log('Hello World!');

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

//var Title =  require('./app');
// console.log(sum(1, 3));

const renderApp = (NexApp) => {
	render(
		<AppContainer>
			<NexApp />
		</AppContainer>,
		document.querySelector('[data-js="app"]')
	)
};

renderApp(App);

if (module.hot){
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		renderApp(NextApp);
	});
}