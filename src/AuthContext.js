import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loggedIn: false, username: null });

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/check-session', {
        credentials: 'include'
      });
      const data = await response.json();
      setAuth(data);
    } catch (error) {
      console.error('Session check error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};