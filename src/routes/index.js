import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import ConfirmMailPage from '../pages/ConfirmMailPage';
import NewPassword from '../pages/NewPassword';

import Dashboard from '../pages/Dashboard';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/resetar-senha" component={ResetPassword} />
      <Route path="/confirmar-solicitacao" component={ConfirmMailPage} />
      <Route path="/criar-nova-senha/:token" component={NewPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
