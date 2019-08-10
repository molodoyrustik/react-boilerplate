import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './authReducer';
import forgotPassword from './forgotPassword';
import validationReducer from './validationReducer';
import userReducer from './userReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  forgot: forgotPassword,
  page: validationReducer,
  user: userReducer,
});
