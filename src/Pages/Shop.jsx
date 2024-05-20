import React from 'react'
import Popular from '../Components/Popular/Popular';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import NewCollection from '../Components/NewCollections/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
