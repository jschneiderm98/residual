import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Recover from '../pages/PasswordRecover';
import Dashboard from '../pages/Dashboard';
import Teachers from '../pages/Teachers';
import Subject from '../pages/Subject';
import Topic from '../pages/Topic';
import CalendarPage from '../pages/Calendar';
import ReportCard from '../pages/ReportCard';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Signup} />
      <Route exact path="/recover" component={Recover} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/subject" component={Subject} />
      <Route exact path="/topic" component={Topic} />
      <Route exact path="/calendar" component={CalendarPage} />
      <Route exact path="/reportcard" component={ReportCard} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
