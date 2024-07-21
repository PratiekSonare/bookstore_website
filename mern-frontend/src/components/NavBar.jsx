import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { GiBiceps } from "react-icons/gi";


import '../App.css'

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Blog', path: '/blog' },
        { link: 'Add a Book', path: '/admin/dashboard' },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 rounded-2xl'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky left-0 top-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/">
                        <span className="text-2xl font-bold text-blue-700 flex items-center">
                            <GiBiceps /> PSAJ
                        </span> 
                    </Link>


                    {/* for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link> )
                        }
                    </ul>

                    {/* for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                    </div>

                    {/* for small devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none' >
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                            }
                        </button>
                    </div>

                    {/* for small devices */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"} `}>
                        {
                            navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link> )
                        }
                    </div>
                    

                </div>
            </nav>
        </header>
    );
};

export default NavBar;
