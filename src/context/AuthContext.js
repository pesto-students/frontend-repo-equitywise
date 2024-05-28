// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




//// src/context/AuthContext.js
//import React, { createContext, useContext, useState } from 'react';

//const AuthContext = createContext();

//export const useAuth = () => useContext(AuthContext);

//export const AuthProvider = ({ children }) => {
//  const [user, setUser] = useState(null);

//  const login = (userData) => {
//    setUser(userData);
//  };

//  const logout = () => {
//    setUser(null);
//  };

//  return (
//    <AuthContext.Provider value={{ user, login, logout }}>
//      {children}
//    </AuthContext.Provider>
//  );
//};