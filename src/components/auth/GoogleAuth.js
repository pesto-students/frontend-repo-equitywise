import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com';

function GoogleAuth({ onSuccess, onFailure }) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleAuth;
