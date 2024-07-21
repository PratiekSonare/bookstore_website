import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import SimpleFooter from './components/Footer';
import SignUp from './components/SignUp';
import { AuthProvider, AuthContext } from './auth/AuthContext'; // Import AuthProvider and AuthContext

import 'flowbite/dist/flowbite.css'

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div>
        {!user && <SignUp />}
        <NavBar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <SimpleFooter />
      </div>
    </AuthProvider>
  );
};

export default App;
