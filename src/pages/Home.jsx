import React from 'react'
import Banner from '../components/Banner'
import Instagram from '../components/Instagram'
import Newsletter from '../components/Newsletter'
import Luxury from '../components/Luxury'
import RoomSuits from '../components/RoomSuits'
import Spa from '../components/Spa'
import Special from '../components/Special'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Luxury/>
      <RoomSuits/>
      <Spa/>
      <Special/>
      <Newsletter/>
      <Instagram/>

    </div>
  )
}

export default Home