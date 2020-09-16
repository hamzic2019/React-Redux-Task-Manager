import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

import Home from './../components/Home'

class Routes extends Component {
  render(){
    return(
      <BrowserRouter> 
        <Route path="/" component={Home} exact={true} />
      </BrowserRouter>
    );
  }
}

export default Routes;