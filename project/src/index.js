import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Client from './client';
import history from './history';
import configureStore from './store';

const store = configureStore(history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(<Client store={store} history={history}/>);

if (module.hot) {
  module.hot.accept();
}
