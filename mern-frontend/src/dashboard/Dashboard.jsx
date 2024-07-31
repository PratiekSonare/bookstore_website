import React from 'react'
import Sidebar from '../dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sidebar />
        <Outlet />
      </div>
  )
}

export default Dashboard