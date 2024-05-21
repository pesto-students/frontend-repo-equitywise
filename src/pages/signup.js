import React from 'react';
import GoogleAuth from '../components/auth/GoogleAuth';

function Signup() {
  const handleSignupSuccess = (response) => {
    console.log('Signup Success:', response);
    // Handle signup success (e.g., send token to your server or store it locally)
  };

  const handleSignupFailure = (response) => {
    console.log('Signup Failed:', response);
    // Handle signup failure
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Signup Page</h1>
        <GoogleAuth onSuccess={handleSignupSuccess} onFailure={handleSignupFailure} />
      </header>
    </div>
  );
}

export default Signup;
