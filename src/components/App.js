import React, { Component } from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

import Login from './Login';
import Signup from './Signup';
import Home from './Home'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> 
        <Route component={Home} />
      </Switch>
    );
  }
}

export default App;
