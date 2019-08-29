import React from 'react';

import Index from './pages/index';
import About from './pages/about';

import NotFound from './pages/not-found';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;
