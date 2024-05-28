import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import image from './diversifyportfolio.webp';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSuccess = (response) => {
    console.log('Login Success:', response);
    login(response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  const handleEmailLogin = () => {
    // email/password login logic
    console.log('Email Login:', { email, password });
    login({ email }); 
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4 bg-white rounded shadow-md">
          <div className="md:w-1/2 p-4 hidden md:block">
            <img src={image} alt="Login to Equity Wise" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">Login to Equity Wise</h1>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
              Login
            </button>
            <div className="mb-4">
              <p>Not registered with Equity Wise? <Link to="/signup" className="text-blue-500">Sign Up here</Link></p>
            </div>
            <GoogleOAuthProvider clientId="536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com">
              <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;











//import React, { useState } from 'react';
//import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
//import { useAuth } from '../context/AuthContext';
//import Header from '../components/common/Header';
//import Footer from '../components/common/Footer';
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom

//const Login = () => {
//  const { login } = useAuth();
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');

//  const onSuccess = (response) => {
//    console.log('Login Success:', response);
//    login(response.profileObj);
//  };

//  const onFailure = (response) => {
//    console.log('Login Failed:', response);
//  };

//  const handleEmailLogin = () => {
//    // Implement email/password login logic here
//    console.log('Email Login:', { email, password });
//    login({ email }); 
//  };

//  return (
//    <div>
//      <Header />
//      <div className="flex justify-center items-center h-screen">
//        <div className="w-1/3 p-4 bg-white rounded shadow-md">
//          <h1 className="text-2xl font-bold mb-4">Login</h1>
//          <div className="mb-4">
//            <input
//              type="email"
//              placeholder="Email"
//              className="w-full p-2 border border-gray-300 rounded"
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//            />
//          </div>
//          <div className="mb-4">
//            <input
//              type="password"
//              placeholder="Password"
//              className="w-full p-2 border border-gray-300 rounded"
//              value={password}
//              onChange={(e) => setPassword(e.target.value)}
//            />
//          </div>
//          <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white p-2 rounded mb-4">
//            Login
//          </button>
//          <div className="mb-4">
//            <p>Not registered with Equity Wise? <Link to="/signup" className="text-blue-500">Sign Up here</Link></p>
//          </div>
//          <GoogleOAuthProvider clientId="536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com">
//            <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} />
//          </GoogleOAuthProvider>
//        </div>
//      </div>
//      <Footer />
//    </div>
//  );
//};

//export default Login;