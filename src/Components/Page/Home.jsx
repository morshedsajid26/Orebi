import React from 'react'
import Banner from '../Banner'
import Sales from '../Sales'
import Arrivals from '../Arrivals'
import BestSeller from '../BestSeller'
import Ad from '../Ad'
import SpeacialOffer from '../SpeacialOffer'
import Intro from '../Intro'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Intro/>
      <Sales/>
      <Arrivals/>
      <BestSeller/>
      <Ad/>
      <SpeacialOffer/>
    </div>
  )
}

export default Home