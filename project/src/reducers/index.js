import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import validationReducer from './validationReducer';
import userReducer from './userReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  page: validationReducer,
  user: userReducer,
});
