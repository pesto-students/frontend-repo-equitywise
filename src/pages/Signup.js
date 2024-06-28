import React, { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import image from '../assets/images/signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import GoogleLoginComponent from '../Components/GoogleAuth';
import validator from 'validator';
const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCnfirnPassword, setShowCnfirmPassword] = useState(false);
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
    return validator.isEmail(email);
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

  const handleEmailSignup = async () => {
    console.log('handleEmailSignup called');

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      console.log('Invalid email address');
      //return;
    }
    try {
      debugger;
      const response = await fetch('https://backend-repo-equitywise.onrender.com/FindUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailid: email })
      });
debugger;
      if (response.status === 200) {
        setErrorMessage('Email already exists');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      if (!validatePassword(password)) {
        setErrorMessage('Password must contain at least one special character, one capital letter, and one number');
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      const signupResponse = await axios.post('https://backend-repo-equitywise.onrender.com/signup', {
        emailid: email,
        password: password
      });

      console.log('API response:', signupResponse.data);
      onSuccess(signupResponse.data); // Assuming API response includes user data for login

    } catch (error) {
      console.error('Signup error:', error);
      onFailure(error);
    }
  };

  return (
    <div className='flex flex-col h-screen'>
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
                type={showCnfirnPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-300"
                onClick={() => setShowCnfirmPassword(!showCnfirnPassword)}
              >
                <FontAwesomeIcon icon={showCnfirnPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <button onClick={handleEmailSignup} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Sign Up
            </button>
            <div className='flex justify-center'>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
               <GoogleLoginComponent />
            </GoogleOAuthProvider>
            </div>
          </div>

          <div className="md:w-1/2 md:order-2 order-1 p-4 ">
            <img src={image} alt='Sign Up to Equity Wise' className='w-full h-auto'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;