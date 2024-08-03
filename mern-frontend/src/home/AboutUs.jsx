import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className='px-4 lg:px-24 my-20 justify-items-center items-center gap-12'>

        <div className='md:w-1/2'>
            {/* <img src={} alt="" className='rounded md:w-10/12'></img> */}
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-5xl font-bold my-5 leading-snug'>About <span className='text-blue-700'>Us</span></h2>
            <p>We're just a couple of students from IIT Bombay with a pretty awesome book collection ;) </p>
        </div>
    </div>



  )
}

export default AboutUs