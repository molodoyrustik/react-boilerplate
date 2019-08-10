import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import history from './history';
import routes from './routes';

import './sass/main.scss';

class Client extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Client;
