import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './test.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin-login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        alert('Login successful');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        alert('Error: ' + error.response.data.message || 'Invalid username or password');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error in setting up request:', error.message);
        alert('Error in setting up request. Please check your network and try again.');
      }
    }
  };

  return (
    <div className='flex justify-around items-center h-screen'>
      <div className='p-8 shadow-sm shadow-blue-600 transition-shadow duration-300 ease-in hover:shadow-xl hover:shadow-blue-600  rounded-full'>
        <h1 className='text-5xl roboto-condensed-bold'>Admin Login</h1>
      </div>
      <div>
        

        <form className='flex flex-col' onSubmit={handleSubmit}>
          <p className='text-left poppins-thin'>Username</p>
          <div className='flex flex-col items-center mb-6'>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className='w-56 rounded-lg'
            />
          </div>

        <p className='text-left poppins-thin'>Password</p>
          <div className='flex flex-col items-center mb-6'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className='w-56 rounded-lg'
            />
          </div>

          <button className='h-10 poppins-bold rounded-2xl bg-blue-gray-300 border-r-blue-gray-300 hover:bg-blue-600 border-y-deep-purple-500' type="submit">Login</button>
        </form>
      </div>
      
    </div>
  );
};

export default AdminLogin;
