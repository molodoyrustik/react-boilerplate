import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import MainLayout from '../../layouts/main-layout';

class Login extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>About</title>
        </Helmet>
        <div className="about">
          <h1>About page!!</h1>
        </div>
      </MainLayout>
    );
  }
}

export default Login;
