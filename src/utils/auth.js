// src/auth.js
export const isAuthenticated = () => {
    // Assuming token is stored in localStorage
    return localStorage.getItem('token') !== null;
  };
  
  export const login = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };
  