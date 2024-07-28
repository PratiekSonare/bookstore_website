import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to the sign-up page if not authenticated
    return <Navigate to="http://localhost:5000/admin-login" />;
  }
  return children;
};

export default ProtectedRoute;
