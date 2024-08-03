import React from 'react'
import BannerCard from '../home/BannerCard';

import './test.css';

function Banner() {
  return (
    <div className='px-4 lg:px-12 bg-white'>
        <div className='flex w-full flex-col md:flex-row justify-around items-center gap-0 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold text-black text-left'>Lending books becomes easy! <span className='text-blue-700 block mt-10 text-4xl'>Now at IIT Bombay</span></h2>
                <p className='md:w-4/5 text-justify quicksand-thin'> Are you an avid book reader finding difficulty in procuring books to read? We're here to solve just that! We're lending books to insti junta so that they can keep up with their hobbies of reading without any hassle!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder=' Search a book' className='py-2 px-5 rounded-s-xl outline-none bg-slate-200' />
                    <button className='rounded-br-lg rounded-tr-lg bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'> Search </button>  
                </div>
            </div>
        
        <div className='mr-10 mt-auto'>
            <BannerCard />
        </div>
        
        
        </div>
    </div> 
  )
}

export default Banner