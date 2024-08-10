// App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBarAlt from './components/NavBarAlt';
import SimpleFooter from './components/Footer';
import 'flowbite/dist/flowbite.css';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'; // Hide navbar on root (login) route

  return (
      <div className='min-h-screen'>
        {showNavbar && <NavBarAlt />}
        <div>
          <Outlet />
        </div>
        <SimpleFooter />
      </div>
  );
};

export default App;
