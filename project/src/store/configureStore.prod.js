import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import reducer from '../reducers';

export default function (history) {
  const enhancer = compose(applyMiddleware(thunk, routerMiddleware(history)));
  const store = createStore(reducer(history), enhancer);

  return store;
}
