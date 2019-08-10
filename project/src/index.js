import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { AppContainer } from 'react-hot-loader';

import Client from './client';

import history from './history';
import configureStore from './store';
import { testToken } from './actions';

const store = configureStore(history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('root'),
  );
};

const token = Cookies.get('token');

store.dispatch(testToken(token)).then(() => {
  render(<Client store={store} history={history}/>);
});

if (module.hot) {
  module.hot.accept();
}
