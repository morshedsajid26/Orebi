import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { BiRefresh } from 'react-icons/bi'

const Li = ({ name, icon }) => {
  return (
    <li className='list-none flex justify-end items-center gap-4 font-DM text-sm sm:text-base text-[#767676] transition-all duration-300 cursor-pointer hover:text-primary hover:font-bold'>
      {name} {icon}
    </li>
  )
}

const ProductCard = ({ src, pName, price, colour, offer, className, Pclass }) => {
  return (
    <div className={`max-w-[370px] w-full group ${Pclass}`}>
      <div className="relative w-full h-auto  group">
        <img className='w-full h-full object-cover' src={src} alt="" />

        {/* Hover/Click Actions */}
        <div className='absolute w-full left-0 bottom-0 bg-white/50 px-6 py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300'>
          <ul>
            <Li name="Add to Wish List" icon={<FaHeart className='text-primary' />} />
            <Li name="Compare" icon={<BiRefresh className='text-primary my-5' />} />
            <Li name="Add to Cart" icon={<FaCartShopping className='text-primary' />} />
          </ul>
        </div>

        {/* Offer Tag */}
        <button className={`absolute top-4 left-4 bg-primary text-white font-DM min-w-[60px] px-3 py-1 text-xs sm:text-sm font-bold ${className}`}>
          {offer}%
        </button>
      </div>

      {/* Text Section */}
      <div className="text pt-4">
        <div className="flex justify-between">
          <h3 className='text-primary font-DM text-lg sm:text-xl font-bold'>{pName}</h3>
          <span className='text-[#767676] font-DM text-sm sm:text-base'>${price}</span>
        </div>
        <p className='text-[#767676] font-DM text-sm sm:text-base mt-3'>{colour}</p>
      </div>
    </div>
  )
}

export default ProductCard
