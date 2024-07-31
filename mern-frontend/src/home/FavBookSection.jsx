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
            <h2 className='text-5xl font-bold my-5 leading-snug text-left'>Find your Favourite <span className='text-blue-700'>Book Here!</span> </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iusto harum amet, sit commodi aut debitis ad consequatur voluptate nulla vitae dolorum consequuntur accusantium sapiente porro qui! Autem, molestiae dolorum.</p>

            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Dowloads</p>
                </div>
            </div>

            <Link to = '/shop' className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more!</button></Link>
        </div>
    </div>



  )
}

export default FavBookSection