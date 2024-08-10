import React from 'react';
import SearchComponent from './SearchComponent';
import BannerCard from '../home/BannerCard';

function Banner() {
  return (
    <div className='flex justify-center ml-40'>
      <div className='px-4 lg:px-12 bg-white'>
        <div className='flex flex-col md:flex-row items-start justify-center pt-40'>
          {/* Text Section */}
          <div className='md:w-1/2'>
            <h2 className='text-6xl font-bold text-black text-left'>
              Lending books becomes easy!{' '}
              <span className='text-blue-700 block mt-10 text-4xl'>
                Now at IIT Bombay
              </span>
            </h2>
            <p className='md:w-11/12 text-justify quicksand-thin mt-4'>
              Are you an avid book reader finding difficulty in procuring books to
              read? We're here to solve just that! We're lending books to insti junta
              so that they can keep up with their hobbies of reading without any
              hassle!
            </p>
          </div>
          {/* BannerCard Section */}
          <div className='md:w-1/2 flex justify-center'>
            <BannerCard />
          </div>
        </div>
        {/* Search Button Section */}
        <div className='flex justify-center py-4'>
          <SearchComponent />
        </div>
      </div>
    </div>

  );
}

export default Banner;
