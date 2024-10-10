import React from 'react'
import Container from './Layer/Container'

import Ads_2 from '/Ad/Ads_2.png'
import { useNavigate } from 'react-router-dom'

const Ad = () => {

    let nevigate= useNavigate()
  return (
    <div className='py-[130px]'>
        <Container>
            <img onClick={()=> nevigate ('/products')} className='cursor-pointer  w-full h-full object-cover row-span-2' src={Ads_2} alt="" />

        </Container>
    </div>
  )
}

export default Ad