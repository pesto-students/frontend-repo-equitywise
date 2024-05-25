import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = ({ onSuccess, onFailure }) => {
  return (
    <GoogleOAuthProvider clientId="536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;