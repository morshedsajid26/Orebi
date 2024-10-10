import React from 'react'
import Container from './Layer/Container'


import Ad_1 from '/Ad/Ad_1.png'
import Ad_2 from '/Ad/Ad_2.png'
import Ad_3 from '/Ad/Ad_3.png'
import { useNavigate } from 'react-router-dom'
import Image from './Layer/Image'

const Sales = () => {


    let nevigate= useNavigate()
  return (
    <div className='mt-[30px] mb-[30px] md:mt-[174px] md:mb-[128px]'>
        <Container className='md:h-[780px] gap-3 md:gap-10 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2'>
          
            <img onClick={()=> nevigate ('/about')} className='cursor-pointer  w-full h-full object-cover row-span-2' src={Ad_1} />
            <img  className='cursor-pointer w-full h-full object-cover' src={Ad_2}/>
            <img  className='cursor-pointer w-full h-full object-cover' src={Ad_3}/>




        </Container>
    </div>
  )
}

export default Sales