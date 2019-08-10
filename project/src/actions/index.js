import axios from 'axios';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';

import {
  SUBMIT_LOGIN_DATA,
  SUBMIT_SIGNUP_DATA,
  SUBMIT_FORGOT_DATA,
  SUBMIT_FORGOT_PASSWORD_DATA,
  SUBMIT_RESET_DATA,
  TEST_TOKEN,
  LOGOUT,
  START, SUCCESS, FAIL,
} from '../constants';

import { handleError } from './modal';
import { getDomains } from './domain';
import { getChannels } from './channel';

let mainApi = 'http://localhost:3001/api/v1/';

if (process.env.NODE_ENV === 'production') {
  mainApi = 'https://app.ashlie.io/api/v1/';
} else if (process.env.NODE_ENV === 'development') {
  mainApi = 'http://localhost:3001/api/v1/';
}

export function login(data, type) {
  const apiUrl = 'auth/login';

  return (dispatch) => {
    dispatch({
      type: SUBMIT_LOGIN_DATA + START,
      payload: {
        data,
      },
    });

    return (axios.post(`${mainApi}${apiUrl}`, data)
      .then((response) => {
        const { token } = response.data[0];
        Cookies.set('token', `${token}`);

        dispatch({
          type: SUBMIT_LOGIN_DATA + SUCCESS,
          payload: { data },
          response: response.data[0],
        });
        dispatch(getDomains());
        dispatch(getChannels());
        dispatch(push('/dashboard/domains'));
      })
      .catch(error => {
        dispatch({
          type: SUBMIT_LOGIN_DATA + FAIL,
          payload: { data, error },
        });
        dispatch(handleError(error.response.data[0].message));
      }));
  };
}

export function test(data, type) {}
