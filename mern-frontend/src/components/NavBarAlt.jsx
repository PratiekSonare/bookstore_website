import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';
import './NavBar.css';
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const NavBarAlt = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navList = (
    <ul className="flex flex-col gap-8 lg:flex-row lg:gap-8 lg:mb-0 mb-4 text-[18px] text-black">
      <Link to="/">
        <li className='hover:text-purple-200'>Home</li>
      </Link>
      <Link to="/shop">
        <li className='hover:text-purple-200'>Library</li>
      </Link>
      <Link to="/requestbook">
        <li className='hover:text-purple-200'>Request A Book</li>
      </Link>
      <Link to="/contact">
        <li className='hover:text-purple-200'>Contact Us</li>
      </Link>
      <Link to="/cart">
      <li className='hover:text-purple-200 cursor-pointer' onClick={''}>
        <FaCartShopping style={{ width: '24px', height: '24px' }} />
      </li>
      </Link>
      <Link to="/user-profile">
      <li className='hover:text-purple-200 cursor-pointer' onClick={''}>
        <CgProfile style={{ width: '24px', height: '24px' }} />
      </li>
      </Link>
    </ul>
  );

  return (
    <header className={`w-full fixed z-50 top-0 right-0 left-0 ${isSticky ? 'bg-yellow-100 shadow-lg' : 'bg-transparent'} transition-all ease-in-out duration-300`}>
      <nav className='rounded-b-full'>
        <div className='flex justify-between h-20'>
          <div className='flex items-center flex-1 m-10'>
            <span className='text-3xl font-bold anton-regular'>yourLibrary.com</span>
          </div>
          <div className={`hidden lg:flex lg:items-center lg:justify-end lg:flex-1 ${isSticky ? 'text-black' : 'text-white'}`}>
            <div className='flex items-center gap-x-1 mr-10'>
              {navList}
            </div> 
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={''}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div className={`lg:hidden ${openNav ? 'block' : 'hidden'}`}>
          <div className='flex flex-col items-center gap-y-4 bg-teal-200 text-black p-4'>
            {navList}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarAlt;
