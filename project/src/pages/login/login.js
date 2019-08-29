import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import LoginLayout from '../../layouts/login-layout';
import LoginForm from '../../components/login-form';

class Login extends Component {
  render() {
    return (
      <LoginLayout>
        <Helmet>
          <title>Login !</title>
        </Helmet>
        <div className="auth">
          <div className="auth__block">
            <p className="auth__title">Login!adfadfadsf!</p>
            <LoginForm />
          </div>
        </div>
      </LoginLayout>
    );
  }
}

export default Login;