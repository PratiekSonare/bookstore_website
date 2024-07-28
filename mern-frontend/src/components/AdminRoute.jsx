import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import DashBoardLayout from '../dashboard/DashBoardLayout';

const AdminRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:5000/admin/protected', { withCredentials: true });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <DashBoardLayout/> : <Navigate to="/admin-login" />;
};

export default AdminRoute;