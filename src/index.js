import React from 'react';
import { render } from 'react-dom'

import { HashRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-123523596-1');

render((
  <HashRouter>
    <App />
  </HashRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
