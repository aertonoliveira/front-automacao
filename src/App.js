import React from 'react';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

import { store } from './store';

const App = () => {
  const { signed } = store.getState().auth;

  return <>{signed ? <Layout /> : <AuthLayout />}</>;
};

export default App;
