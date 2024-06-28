import React, { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../context/UserContext';
import GoogleLoginComponent from '../Components/GoogleAuth';
import validator from 'validator';
const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 
  const { setUsername } = useUser();
  const validateEmail = (email) => {
    return validator.isEmail(email);
  };
  const onSuccess = (response) => {
    console.log('Login Success:', response);
    setUsername(email);
    login(response.data);
    navigate('/MyPortfolio');
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
    setErrorMessage('Login failed. Please try again.');
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
  const handleEmailLogin = () => {
    console.log('handleEmailLogin called');

    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      console.log('Email or password not entered');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      console.log('Invalid email address');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage('Password must contain at least one special character, one capital letter, and one number');
      return;
    }
    console.log('Validation passed. Making API request...');
    axios.post('https://backend-repo-equitywise.onrender.com/login', {
      emailid: email,
      password: password
    })
    .then((response) => {
      console.log('API response:', response);
      if (response.status === 201 || response.status === 200) {
        onSuccess(response);
      } else {
        setErrorMessage('Invalid email or password');
      }
    })
    .catch((error) => {
      console.log('API error:', error);
      onFailure(error);
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4 bg-white rounded shadow-md">
          <div className="md:w-1/2 p-4 hidden md:block">
            <img src={image} alt="Login to Equity Wise" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">Login to Equity Wise</h1>
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Login
            </button>
            <div className="mb-4">
              <p>Not registered with Equity Wise? <Link to="/signup" className="text-blue-500">Sign Up here</Link></p>
            </div>
            <div className='flex justify-center'>
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <GoogleLoginComponent login={true} />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;






//import React, { useState } from 'react';
//import axios from 'axios';
//import { GoogleOAuthProvider } from '@react-oauth/google';
//import { useAuth } from '../context/AuthContext';
//import { Link, useNavigate } from 'react-router-dom';
//import image from '../assets/images/login.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
//import { useUser } from '../context/UserContext';
//import GoogleLoginComponent from '../Components/GoogleAuth';
//const Login = () => {
//  const { login } = useAuth();
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [showPassword, setShowPassword] = useState(false);
//  const [errorMessage, setErrorMessage] = useState('');
//  const navigate = useNavigate(); 

//  const { setUsername } = useUser();
//  const onSuccess = (response) => {
//    console.log('Login Success:', response);
//    setUsername(email);
//    login(response.data);
//    navigate('/MyPortfolio');
//  };

//  const onFailure = (response) => {
//    console.log('Login Failed:', response);
//    setErrorMessage('Login failed. Please try again.');
//  };

//  const handleEmailLogin = () => {
//    console.log('handleEmailLogin called');

//    if (!email || !password) {
//      setErrorMessage('Please enter both email and password');
//      console.log('Email or password not entered');
//      return;
//    }

//    console.log('Validation passed. Making API request...');
//    axios.post('https://backend-repo-equitywise.onrender.com/login', {
//      emailid: email,
//      password: password
//    })
//    .then(function (response) {
//      debugger;
//      console.log('API response:', response);
//      if (response.status === 201 || response.status === 200) {
//        onSuccess(response);
//      } else {
//        setErrorMessage('Invalid email or password');
//      }
//    })
//    .catch(function (error) {
//      debugger;
//      console.log('API error:', error);
//      onFailure(error);
//    });
//  };

//  return (
//    <div className="flex flex-col h-screen">
//      <div className="flex-grow flex justify-center items-center">
//        <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4 bg-white rounded shadow-md">
//          <div className="md:w-1/2 p-4 hidden md:block">
//            <img src={image} alt="Login to Equity Wise" className="w-full h-auto" />
//          </div>
//          <div className="md:w-1/2 p-4">
//            <h1 className="text-2xl font-bold mb-4">Login to Equity Wise</h1>
//            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
//            <div className="mb-4">
//              <input
//                type="email"
//                placeholder="Email"
//                className="w-full p-2 border border-gray-300 rounded"
//                value={email}
//                onChange={(e) => setEmail(e.target.value)}
//              />
//            </div>
//            <div className="mb-4 relative">
//              <input
//                type={showPassword ? "text" : "password"}
//                placeholder="Password"
//                className="w-full p-2 border border-gray-300 rounded"
//                value={password}
//                onChange={(e) => setPassword(e.target.value)}
//              />
//              <button
//                type="button"
//                className="absolute right-2 top-2 text-gray-300"
//                onClick={() => setShowPassword(!showPassword)}
//              >
//                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//              </button>
//            </div>
//            <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
//              Login
//            </button>
//            <div className="mb-4">
//              <p>Not registered with Equity Wise? <Link to="/signup" className="text-blue-500">Sign Up here</Link></p>
//            </div>
//            <div className='flex justify-center'>
//            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//               <GoogleLoginComponent/>
//            </GoogleOAuthProvider>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};

//export default Login;