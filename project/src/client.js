import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
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
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(Client);
