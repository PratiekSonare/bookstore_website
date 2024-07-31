import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/admin-logout', {}, { withCredentials: true });
      navigate('/admin-login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default DashBoardLayout;
