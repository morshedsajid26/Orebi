import React, { useState } from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import TitleHeader from '../Layer/TitleHeader'
import Input from '../Layer/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../Layer/Button'

const LogIn = () => {

    let [show,setShow]=useState(false)
  return (
    <div>
        <Container className='pt-[124px] pb-[140px]'>
            <Bredcumb/>

           
            <div className='border-b mt-[127px] '>
                <p className='font-DM text-[16px] text-[#767676] w-[644px] pb-[62px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>

            <div className=' mt-[57px]  border-b pb-[69px]'>
                 <div className=' flex flex-wrap gap-x-10 gap-y-6'>
                <TitleHeader className='mb-[42px]  w-full' headerText='Returning Customer'/>
                <Input
                 className='w-[507px]' 
                 id='Email' 
                 labelText='Email address' 
                 type='text' 
                 placeholder='company@domain.com' />


                <Input
                 className='w-[507px] relative' 
                 id='Password' 
                 labelText='Password' 
                 type={`${show? "text":"password"}`} 
                 placeholder='Password' >
                     {
                        show?<FaEye onClick={()=>setShow(!show)} className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]' />:
                   
                   <FaEyeSlash onClick={()=>setShow(!show)}  className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]'  />}


                    </Input> 
                </div>   

                   <div>
                   <Button className='w-[200px] text-[#262626] mt-6' ButtonText='Log in'/>
                   </div>

            </div>


            <div className='mt-[58px]'>
                <TitleHeader headerText='New Customer'/>
            <p className='font-DM text-[16px] text-[#767676] w-[644px] mt-[38px] mb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <Button className='w-[200px] text-[#262626]' ButtonText='Continue'/>

            </div>
            
        </Container>
    </div>
  )
}

export default LogIn