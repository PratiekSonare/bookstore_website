import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBookSection from './FavBookSection'



const home = () => {
  return (
    <div>
      <Banner />
      <FavouriteBooks/>
      <FavBookSection />
    </div>
  )
}

export default home