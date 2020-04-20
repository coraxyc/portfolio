import React from 'react';
import { render } from 'react-dom'

import { Router, HashRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Home from './components/Home';
import CardConnect from './components/projects/CardConnect';
import AvantGarde from './components/projects/AvantGarde';
import * as serviceWorker from './serviceWorker';

render((
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/projects/cardconnect' component={CardConnect}/>
      <Route path='/projects/avantgarde' component={AvantGarde}/>
    </div>
    
  </HashRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
