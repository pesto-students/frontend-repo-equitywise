import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useUser } from '../context/UserContext';

import { useNavigate } from 'react-router-dom';
function GoogleLoginComponent(props) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { setUsername } = useUser();
  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      
      // Get user information from Google
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`
        }
      });
      console.log('User Info:', userInfo.data);
      debugger;
          const response = await fetch('https://backend-repo-equitywise.onrender.com/FindUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailid: userInfo.data.email })
          });
        debugger;
      if (response.status === 201) {
              axios.post('https://backend-repo-equitywise.onrender.com/signup', {
              emailid: userInfo.data.email,
              password: userInfo.data.email
            })
            .then(function (response) {
              console.log('API response:', response);
              console.log('Signup Success:', response);
              login(response.data);
            
            })
            .catch(function (error) {
              console.log('API error:', error);
            // onFailure(error);
            });
          }
          else{
            debugger;
            if(props.Login === "true"){
              axios.post('https://backend-repo-equitywise.onrender.com/login', {
                emailid: userInfo.data.email,
                password: userInfo.data.email
              })
              .then(function (response) {
                debugger;
                console.log('API response:', response);
                if (response.status === 201 || response.status === 200) {
                 // onSuccess(response);
                 login(response.data);
                } else {
                  //setErrorMessage('Invalid email or password');
                }
              })
              .catch(function (error) {
                debugger;
                console.log('API error:', error);
               // onFailure(error);
              });
            }
            else{
              login(response.data);
            }
          }
      // Handle user information (e.g., store in state or context)
      setUsername(userInfo.data.email);
     
       navigate('/MyPortfolio');
    },
    onError: errorResponse => {
      console.error('Login Failed:', errorResponse);
    },
    ux_mode: 'redirect', // Ensure redirect mode
    redirect_uri: 'https://equitywise.netlify.app/auth/google/callback'  // Ensure this matches your registered redirect URI
  
   
  });

  return (
    <div className="flex flex-col items-center">
      <button className="text-blue-500 border border-blue-500 rounded py-2 px-4 hover:bg-blue-500 hover:text-white" onClick={googleLogin}>Login with Google</button>
    </div>
  );
}



export default GoogleLoginComponent;







//import React from 'react';
//import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

//const GoogleAuth = ({ onSuccess, onFailure }) => {
//  return (
//    <GoogleOAuthProvider clientId="536138454360-vu6gndr3s5qrao17q08p57fvrs9lj2ee.apps.googleusercontent.com">
//      <GoogleLogin
//        onSuccess={onSuccess}
//        onFailure={onFailure}
//        cookiePolicy={'single_host_origin'}
//      />
//    </GoogleOAuthProvider>
//  );
//};

//export default GoogleAuth;