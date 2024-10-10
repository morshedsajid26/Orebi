import React from 'react'
import Container from './Layer/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import logo from '/logo.png'


const Footer = () => {
  return (
    <div className='md:py-14 py-7 bg-[#F5F5F3]'>
        <Container >
         <div className='md:grid md:grid-cols-9 md:grid-rows-1 flex flex-col gap-10 md:pl-0 pl-7 '>
         <div className="one "> 
         
         <img className='h-[29px] w-[122px] md:hidden mb-7' src={logo} alt="" />
          
          <h3 className='font-DM font-bold text-[16px] text-primary mb-4'>MENU</h3>
          <ul className='flex flex-col font-DM text-[14px] gap-2.5 text-[#6D6D6D]'>
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Journal</Link>
            
            
          </ul>
          
         </div>
          <div className="one "> 
          <h3 className='font-DM font-bold text-[16px] text-primary mb-4'>SHOP</h3>
          <ul className='flex flex-col font-DM text-[14px]  gap-2.5 text-[#6D6D6D]'>
            <Link>Category 1</Link>
            <Link>Category 2</Link>
            <Link>Category 3</Link>
            <Link>Category 4</Link>
            <Link>Category 5</Link>
            
            
          </ul>
          </div>
          <div className="one "> 
          <h3 className='font-DM font-bold text-primary text-[16px] mb-4'>HELP</h3>
          <ul className='flex flex-col font-DM text-[14px] gap-2.5 text-[#6D6D6D]'>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Special E-shop</Link>
            <Link>Shipping</Link>
            <Link>Secure Payments</Link>
            
            
          </ul>
          </div>
          <div className="one col-span-3 md:ml-[145px]"> 
            <h4 className='font-DM font-bold  text-primary text-[16px] w-[186px]'>(052) 611-5711
            company@domain.com</h4>

            <p className='font-DM  text-[#6D6D6D] text-[14px] mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="one  col-span-3 ml-[125px] md:flex hidden"> 
            <img className='h-[29px] w-[122px] ' src={logo} alt="" />
          </div>


       
         </div>


         <div className=' md:flex text-center  justify-between md:mt-16 mt-10'>
         <div className="icon flex gap-6 justify-center mb-5">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />

          </div>

          <div>
            <p className='font-DM text-[14px] gap-2.5 text-[#6D6D6D] md:px-0 px-[21px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p></div>
         </div>
        </Container>
    </div>
  )
}

export default Footer