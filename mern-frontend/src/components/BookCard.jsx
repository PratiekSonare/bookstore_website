import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';

import './BookCard.css';


const BookCards = ({headline, books}) => {
    console.log(books);
  
    return (
    <div className='my-12 mx-12 lg:px-2'>
        <h2 className='text-5xl text-center font-bold text-black my-10'>{headline}</h2>

        <div className='mt-12'>
        <Swiper
        slidesPerView={1}s
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          width: 'auto', // adjust the width
          height: 'auto', // adjust the height
        }}
      >
        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to = {`/shop`}>
                    <div className='relative border-l-light-blue-400 overflow-visible'>
                        <img src={book.imageURL} alt="" className=' rounded-xl hover:scale-105 hover:shadow-lg transition-all ease-in-out duration-300'/>
                        <button className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded' onClick={''}>
                          <FaCartShopping className='w-4 h-4 text-white'/>
                        </button>
                    </div>
                    <div>
                      <div className='mt-4'>
                        <h2 className='roboto-condensed-bold text-center text-xl hover:text-2xl transition-all ease-in-out duration-300'> {book.title.length > 15 ? `${book.title.substring(0, 30)}...` : book.title} </h2>
                        <h3 className='roboto-condensed-thin block mt-0 mb-10 text-l text-center text-gray-600'>{book.author}</h3>
                      </div>
                    </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
    </div>
  )
}

export default BookCards