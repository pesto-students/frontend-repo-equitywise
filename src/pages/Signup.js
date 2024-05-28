import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import image from './signup.png'; // Import your image

const Signup = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSuccess = (response) => {
    console.log('Signup Success:', response);
    login(response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Signup Failed:', response);
    setErrorMessage('Signup Failed. Please try again later.');
  };

  const handleEmailSignup = () => {
    if (password === confirmPassword) {
      // Implement email/password signup logic here
      console.log('Email Signup:', { email, password });
      login({ email }); // Simplified, replace with real authentication
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className='flex flex-col md:flex-row w-full md:w-2/3 p-4 bg-white rounded shadow-md'>
        
          <div className="md:w-1/2 md:order-1 order-2 p-4">
            <h1 className="text-2xl font-bold mb-4">Register and Track your Equity Portfolio for Free</h1>
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
            </div>
            <button onClick={handleEmailSignup} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Sign Up
            </button>
            {/* Render Google Login button only once */}
            <GoogleOAuthProvider clientId="536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com">
              <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
            </GoogleOAuthProvider>
          </div>

          <div className="md:w-1/2 md:order-2 order-1 p-4">
            <img src={image} alt='Sign Up to Equity Wise' className='w-full h-auto'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
