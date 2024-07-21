import React from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar'

function DashBoardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default DashBoardLayout