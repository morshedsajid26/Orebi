import React from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import Image from '../Layer/Image'

import product1 from '/About/product1.png'
import product2 from '/About/product2.png'
import Button from '../Layer/Button'

const About = () => {
  return (
    <div>
        <Container className='py-[130px]'>
          <Bredcumb/>
          <div className='grid grid-cols-2  gap-10 mt-[136px]'>
            <div className='grid-cols-1  relative'>
              <Image src={product1}/>
              <Button className='px-[97px] py-7 absolute bottom-[62px] left-1/2 -translate-x-1/2' ButtonText='Our Brands'/>
            </div>
            <div className='grid-cols-1  relative'>
              <Image src={product2}/>
              <Button className='px-[99px] py-7 absolute bottom-[62px] left-1/2 -translate-x-1/2' ButtonText='Our Store'/>
            </div>

          </div>

          <p className='text-[39px] font-DM text-[#262626] my-[120px]'>
          Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
          </p>

          <div className='grid grid-cols-3 gap-10'>
           

            <div className="grid-cols-1">
            <h3 className='text-[25px] font-DM font-bold text-[#262626]'>Our Vision</h3>
            <p  className='text-[16px] font-DM  text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>


            <div className="grid-cols-1">
              <h3 className='text-[25px] font-DM font-bold text-[#262626]'>Our Story</h3>
              <p  className='text-[16px] font-DM  text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>

            <div className="grid-cols-1">
            <h3 className='text-[25px] font-DM font-bold text-[#262626]'>Our Brands</h3>
            <p  className='text-[16px] font-DM  text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>

          </div>
        </Container>
    </div>
  )
}

export default About