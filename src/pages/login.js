import React from 'react';
import GoogleAuth from '../components/auth/GoogleAuth';

function Login() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle login success (e.g., send token to your server or store it locally)
  };

  const handleLoginFailure = (response) => {
    console.log('Login Failed:', response);
    // Handle login failure
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <GoogleAuth onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />
      </header>
    </div>
  );
}

export default Login;
