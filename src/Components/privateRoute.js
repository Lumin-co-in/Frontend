// src/Components/PrivateRoute.js
import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
  const { currentUser, isAdmin } = useAuth();

    return currentUser && isAdmin ? <Outlet /> : <Navigate to="/login" />;
  
};

export default PrivateRoute;
