import React from 'react'

import { FaHeart } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { BiRefresh } from 'react-icons/bi'


const Li=({name, icon})=>{
  return(

    <li className='list-none flex justify-end items-center gap-4 font-DM text-[16px] text-[#767676] transition-all duration-300 cursor-pointer  hover:text-primary hover:font-bold  '>
              {name} {icon}
              </li>

  )
}

const VerticalProductCard = ({src,pName,price,colour,offer ,className,Pclass}) => {
  return (
    <div className={` flex gap-[180px] items-center ${Pclass} `}>
        <div className="image w-[160px] h-[160px] relative group ">
            <img className='w-full h-full object-cover' src={src} alt="" />

            

            <button className={`absolute top-3 left-3 bg-primary text-white font-DM w-[50px] py-1 font-bold text-[14px] ${className}`}>
              {offer}
            </button>
        </div>

        <div className="text  flex gap-[450px] justify-between items-center">
          <div className="flex flex-col gap-4">
            <h3 className='text-primary font-DM text-[20px] font-bold'>{pName}</h3>
            <span className='text-[#767676] font-DM text-[16px]'>{price}</span>
            <p className='text-[#767676] font-DM text-[16px] '>{colour}</p>

          </div>
          
          <div className='w-40 '>
             <ul>
            <Li name="Add to Wish List" icon={<FaHeart className='text-primary' />}/>
            <Li name="Compare" icon={<BiRefresh className='text-primary my-5' />}/>
            <Li name="Add to Cart" icon={<FaCartShopping className='text-primary' />}/>

             </ul>

            </div>
          
          
        </div>
        

        
    </div>
  )
}

export default VerticalProductCard