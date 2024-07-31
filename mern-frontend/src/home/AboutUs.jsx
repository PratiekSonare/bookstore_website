import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className='px-4 lg:px-24 my-20 justify-items-center items-center gap-12'>

        <div className='md:w-1/2'>
            {/* <img src={} alt="" className='rounded md:w-10/12'></img> */}
        </div>

        <div className=''>
            <h2 className='text-5xl font-bold my-5 leading-snug'>About <span className='text-blue-700'>Us</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto harum amet, sit commodi aut debitis ad consequatur voluptate nulla vitae dolorum consequuntur accusantium sapiente porro qui! Autem, molestiae dolorum.</p>


        </div>
    </div>



  )
}

export default AboutUs