import React from 'react'
import favbookimg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

function FavBookSection() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>

        <div className='md:w-1/2'>
            <img src={favbookimg} alt="" className='rounded md:w-10/12'></img>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold text-black text-center'>Find your favourite <span className='text-blue-700 block mt-2 text-5xl'>Book Here!</span> </h2>
            <p className='text-justify'> With collection of more than 50+ mainstream books, our library can be all yours! We might not always have the book you were determined to read. Don't worry, pal. Click on 'Request a Book' mentioned above and we'll see what we can do!</p>

            <Link to = '/shop' className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more!</button></Link>
        </div>
    </div>



  )
}

export default FavBookSection