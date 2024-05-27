
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles/styles.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
}



//// src/index.js
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { AuthProvider } from './context/AuthContext';
//import App from './App';
//import './styles/styles.css';

//ReactDOM.render(
//  <React.StrictMode>
//    <AuthProvider>
//      <App />
//    </AuthProvider>
//  </React.StrictMode>,
//  document.getElementById('root')
//);
