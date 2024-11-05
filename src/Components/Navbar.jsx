import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import { Link, useNavigate } from 'react-router-dom'
import Image from './Layer/Image'
import { FaBars, FaCaretDown, FaUser } from "react-icons/fa";


import logo from '/logo.png'
import Li from './Layer/Li'
import { FaCartShopping } from 'react-icons/fa6';


const Navbar = () => {
  
  

let [show, setShow] = useState(false); 


useEffect(()=>{


function widthSize() {
  if(window.innerWidth > 735.98){
    setShow(true)
  }
  else{
    setShow(false)
  }
}

widthSize()


window.addEventListener("resize", widthSize)


},[]);
let nevigate= useNavigate()




  return (
    <nav className='relative  z-50'>

        <Container className=" md:py-8 py-5 px-3 md:px-0 flex items-center relative md:justify-center justify-end gap-5 md-gap-0 z-20" >
        

        <Image className='absolute md:left-0 left-3 top-1/2 -translate-y-1/2' href='/' src={logo} alt=''/>

        

         
            <ul className={` transition-all duration-500 flex md:flex-row flex-col gap-x-10  -z-0 md:bg-transparent  bg-slate-300 absolute md:static top-full left-0 md:w-auto w-full p-4 md:p-0 ${show?"translate-y-0":"-translate-y-[200%]"}`}>
          <Li className=' text-primary text-[14px] ' liText='Home'/>
          <Li liText='Shop' href="/products/" />
          <Li liText='About' href="/about" />
          <Li liText='Contacts' href="/contacts"  />
          <Li liText='Journal' href="/journal"/>
          
        </ul>
          
        <div className="button flex items-center gap-10 md:hidden ">
            <div className='left flex gap-1  '> 
            <FaUser />
            <FaCaretDown />
            </div>
            
            <div className="right">
            <FaCartShopping  />
            </div>
         </div>

        

        <div onClick={()=> setShow(!show)} className='block md:hidden'>


        <FaBars />

        </div>
        
        </Container>

    </nav>
  )
}

export default Navbar