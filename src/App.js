import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

import { store } from './store';

const App = () => {
  const { signed } = store.getState().auth;

  return (
    <div className="App">
      <Switch>{signed ? <Layout /> : <AuthLayout />}</Switch>
    </div>
  );
};

export default App;
