
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css';
import { UserProvider } from './context/UserContext';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  );
}
