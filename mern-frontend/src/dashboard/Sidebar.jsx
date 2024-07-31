import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiLogout, HiShoppingBag, HiShoppingCart, HiUpload, HiUser, HiUserAdd, HiViewBoards } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Component() {

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
    <Sidebar aria-label="Default sidebar example" className="justify-start fixed top-0 left-0 h-screen w-48 bg-gray-100">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>Dashboard</span>
          </button>    
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>Manage</span>
          </button>  
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/upload" icon={HiUpload} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>Add a book</span>
          </button>  
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard" icon={HiShoppingBag} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>Booklist</span>
          </button>   
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiUser} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>User List</span>
          </button>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingCart} className="flex justify-start items-center pl-4">
          <button className="flex items-start">
            <span>Orders</span>
          </button>
          </Sidebar.Item>

          <Sidebar.Item icon={HiLogout} className="flex justify-start items-center pl-4">
          <button onClick={handleLogout} className="flex items-start">
            <span>Logout</span>
          </button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Component;