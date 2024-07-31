import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBookSection from './FavBookSection'
import AboutUs from './AboutUs'


const home = () => {
  return (
    <div>
      <Banner />
      <FavouriteBooks/>
      <FavBookSection />
      <AboutUs />
    </div>
  )
}

export default home