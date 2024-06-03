import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import image from '../assets/images/signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSuccess = (response) => {
    console.log('Signup Success:', response);
    login(response.data);
    navigate('/MyPortfolio');
  };

  const onFailure = (response) => {
    console.log('Signup Failed:', response);
    setErrorMessage('Signup Failed. Please try again later.');
  };

  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    return (
      specialCharRegex.test(password) &&
      capitalLetterRegex.test(password) &&
      numberRegex.test(password)
    );
  };

  const handleEmailSignup = () => {
    console.log('handleEmailSignup called');

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      console.log('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('Password must contain at least one special character, one capital letter, and one number');
      console.log('Invalid password format');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      console.log('Passwords do not match');
      return;
    }

    console.log('Validation passed. Making API request...');
    axios.post('https://backend-repo-equitywise.onrender.com/signup', {
      emailid: email,
      password: password
    })
    .then(function (response) {
      console.log('API response:', response);
      onSuccess(response);
    })
    .catch(function (error) {
      console.log('API error:', error);
      onFailure(error);
    });
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
            <div className="mb-4 relative group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
              <div className="absolute left-0 bottom-full mb-2 hidden w-full bg-gray-800 text-white text-xs rounded-md p-2 group-hover:block">
                Password must contain at least one special character, one capital letter, and one number.
              </div>
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <button onClick={handleEmailSignup} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Sign Up
            </button>
            {/* Render Google Login button only once */}
            <div className='flex justify-center'>
              <GoogleOAuthProvider clientId="233735191819-86l6aehhc334ht83jtbdcun7lmkcdid6.apps.googleusercontent.com">
                <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
              </GoogleOAuthProvider>
            </div>
          </div>

          <div className="md:w-1/2 md:order-2 order-1 p-4 ">
            <img src={image} alt='Sign Up to Equity Wise' className='w-full h-auto'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;