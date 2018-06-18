import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Clients from './Clients';
import Highlights from './Highlights';
import Publications from './Publications';
import Services from './Services';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/clients' component={Clients}/>
      <Route exact path='/highlights' component={Highlights}/>
      <Route exact path='/publications' component={Publications}/>
      <Route exact path='/services' component={Services}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;
