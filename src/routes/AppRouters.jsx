import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import Home from './../components/Home'
import Navigation from './../components/Navigation'

class Routes extends Component {
  render(){
    return(
      <BrowserRouter> 
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;