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

const ProductCard = ({src,pName,price,colour,offer ,className,Pclass}) => {
  return (
    <div className={`w-[370px] group ${Pclass} `}>
        <div className="image w-[full] h-[370px] relative group ">
            <img className='w-full h-full object-cover' src={src} alt="" />

            <div className='absolute w-full  left-0 bottom-0 bg-white/50 px-8 py-6 opacity-0 invisible  group-hover:visible  group-hover:opacity-100 transition-all duration-300 '>
             <ul>
            <Li name="Add to Wish List" icon={<FaHeart className='text-primary' />}/>
            <Li name="Compare" icon={<BiRefresh className='text-primary my-5' />}/>
            <Li name="Add to Cart" icon={<FaCartShopping className='text-primary' />}/>

             </ul>

            </div>

            <button className={`absolute top-5 left-5 bg-primary text-white font-DM w-[92px] py-2 font-bold text-[14px] ${className}`}>
              {offer}%
            </button>
        </div>

        <div className="text pt-6">
          <div className="flex justify-between">
            <h3 className='text-primary font-DM text-[20px] font-bold'>{pName}</h3>
            <span className='text-[#767676] font-DM text-[16px]'>${price}</span>
          </div>
          <p className='text-[#767676] font-DM text-[16px] mt-[15px]'>{colour}</p>
          
        </div>
    </div>
  )
}

export default ProductCard