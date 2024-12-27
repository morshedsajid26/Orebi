import React from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import TitleHeader from '../Layer/TitleHeader'
import Input from '../Layer/Input'
import Button from '../Layer/Button'

import map from '/map.png'

const Contacts = () => {
  return (
    <div>

<Container className='pb-[140px] pt-[124px]'>

  <Bredcumb/>

  <TitleHeader className='mt-[125px]' headerText='Fill up a Form' />

  <form className='w-1/2 mt-[42px] flex flex-col gap-[23px]'>
    <Input 
    labelText='Name'
    placeholder='Your name here'
    type='text'  />

    <Input 
    labelText='Email'
    placeholder='Your email here'  />

<div className='flex flex-col border-b'>
  <label className='font-DM font-bold text-[16px]' >Message</label>
  <textarea className='font-DM text-[14px] w-full outline-none pt-2.5 pb-4' placeholder='Your message here'></textarea>
  </div>

  <Button className='w-[200px]' ButtonText='Post'/>
  </form>

  <div className='mt-[140px]'>
    <img src={map} alt="" />
  </div>

  
</Container>
    </div>
  )
}

export default Contacts