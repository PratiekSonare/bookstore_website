// SearchCard.jsx
import React from 'react';
import './test.css';

function SearchCard({ book }) {
  return (
    <React.Fragment key={book._id}>
      <div className='flex flex-row justify-evenly items-center gap-7 mx-5 my-5'>
        <div className='flex justify-center items-center overflow-visible'>
          <li>
            <img src={book.imageURL} alt="book" className='w-100 h-200 rounded-xl' />
          </li>
        </div>
        <div className='flex flex-col justify-center text-left'>
          <li className='poppins-bold text-xl hover:text-2xl transition-all ease-in-out duration-200'><span className='poppins-semibold'>Title: </span>{book.title}</li>
          <li className='text-sm mt-1 hover:text-base transition-all ease-in-out duration-200'><span className='poppins-semibold'>Description:</span> <span className='text-justify'>{book.description}</span></li>
          <li className='text-sm mt-1 hover:text-base transition-all ease-in-out duration-200'><span className='poppins-semibold'>Availability:</span> {book.availability}</li>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SearchCard;
