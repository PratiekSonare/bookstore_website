import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import SimpleFooter from './components/Footer';
import 'flowbite/dist/flowbite.css';

const App = () => {
  return (
        <div>
        <NavBar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <SimpleFooter />
      </div>

  );
};

export default App;
