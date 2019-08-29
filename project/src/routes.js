import React from 'react';
import Login from './pages/Login';

import NotFound from './pages/NotFound';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;
