// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../axios.js';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
   
        const response = await axios.get('/user/info');
        setCurrentUser(response?.data?.user);
        setIsAdmin(response?.data?.user?.role === 'admin');
      } catch (error) {
        console.error("Error fetching user", error);
        setCurrentUser(null); // Ensure currentUser is null on error
        setIsAdmin(false);
      }finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
