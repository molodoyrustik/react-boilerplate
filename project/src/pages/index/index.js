import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import MainLayout from '../../layouts/main-layout';
import LoginForm from '../../components/login-form';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>Index</title>
        </Helmet>
        <div className="auth">
          <div className="auth__block">
            <p className="auth__title">Index Page</p>
            <LoginForm />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Login;
