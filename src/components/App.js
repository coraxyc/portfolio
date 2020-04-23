import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import '../App.css';
import Home from './Home';
import AvantGarde from './projects/AvantGarde';
import CardConnect from './projects/CardConnect';
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const history = createHistory();
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    })

    return (
      <>
        <Route exact path='/' component={Home}/>
        <Route path='/projects/cardconnect' component={CardConnect}/>
        <Route path='/projects/avantgarde' component={AvantGarde}/>
      </>
    );
}

export default App;
