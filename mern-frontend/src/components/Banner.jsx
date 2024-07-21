import React from 'react'
import BannerCard from '../home/BannerCard';

function Banner() {
  return (
    <div className='px-4 lg:px-12 bg-white'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black text-left'>Lend your books from here! <span className='text-blue-700'>Here at IIT Bombay</span></h2>
                <p className='md:w-4/5 text-left'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique minus iure cumque consequuntur quae accusantium ipsam mollitia asperiores odit, neque, cupiditate ea illum vitae harum tenetur debitis fuga expedita.</p>
                <div>
                    <input type="search" name="search" id="search" placeholder=' Search a book' className='py-2 px-5 rounded-s-xl outline-none bg-slate-200' />
                    <button className='rounded-br-lg rounded-tr-lg bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'> Search </button>  
                </div>
            </div>
        
        <div>
            <BannerCard />
        </div>
        
        
        </div>
    </div> 
  )
}

export default Banner