// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  // Load username from localStorage on app load
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Update localStorage when username changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);





//// UserContext.js (updated for persistence)
//import React, { createContext, useState, useContext, useEffect } from 'react';

//const UserContext = createContext();

//export const UserProvider = ({ children }) => {
//  const [username, setUsername] = useState(null);

//  // Load username from localStorage on app load
//  useEffect(() => {
//    const storedUsername = localStorage.getItem('username');
//    if (storedUsername) {
//      setUsername(storedUsername);
//    }
//  }, []);

//  // Update localStorage when username changes
//  useEffect(() => {
//    if (username) {
//      localStorage.setItem('username', username);
//    } else {
//      localStorage.removeItem('username');
//    }
//  }, [username]);

//  return (
//    <UserContext.Provider value={{ username, setUsername }}>
//      {children}
//    </UserContext.Provider>
//  );
//};

//export const useUser = () => useContext(UserContext);