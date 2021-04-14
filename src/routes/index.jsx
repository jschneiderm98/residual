import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Recover from '../pages/PasswordRecover';
import Dashboard from '../pages/Dashboard';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Signup} />
      <Route exact path="/recover" component={Recover} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
