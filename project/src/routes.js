import React from 'react';
import Login from './pages/login';

import NotFound from './pages/not-found';

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
