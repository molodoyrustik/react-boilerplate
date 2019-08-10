import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './pages/Login';

import NotFound from './pages/NotFound';

const ReDirect = () => {
  return <Redirect to='/auth/login'/>;
};

const Routes = [
  {
    path: '/',
    exact: true,
    component: ReDirect,
  },
  {
    path: '/auth/login',
    component: Login,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;
