import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DashboardLayout from '../pages/_layouts/dashboard';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const ativo = store.getState().user?.profile?.ativo ?? false;
  console.log('o que é isso? ', ativo);
  if (!ativo && isPrivate) {
    return <Redirect to="/" />;
  }

  if (ativo && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = ativo ? DashboardLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}
