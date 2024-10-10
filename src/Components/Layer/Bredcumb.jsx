import React from 'react'
import TitleHeader from '../Layer/TitleHeader'
import { FaAngleRight } from 'react-icons/fa'

{/*  */}

const Bredcumb = () => {
  return (
    <div className=''>
        <TitleHeader headerText={`${window.location.pathname.split('/')[1]} ${window.location.pathname.split('/')[2]}`}/>
        <p className='flex items-center gap-2 font-DM text-[12px] text-[#767676] capitalize mt-[11px]'>Home <FaAngleRight  />{` ${window.location.pathname.split('/')[1]} ${window.location.pathname.split('/')[2]}`}</p>
    </div>
  )
}

export default Bredcumb
