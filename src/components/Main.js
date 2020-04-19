import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import CardConnect from './projects/CardConnect'
import AvantGarde from './projects/AvantGarde'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projects/cardconnect' component={CardConnect}/>
      <Route path='/projects/avantgarde' component={AvantGarde}/>
    </Switch>
  </main>
)

export default Main


