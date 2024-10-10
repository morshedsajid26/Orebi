import React from 'react'
import Container from './Layer/Container'
import { RiNumber2 } from 'react-icons/ri'
import { MdLocalShipping } from 'react-icons/md'
import { FaArrowRotateLeft } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div className='border-b'>
        <Container>
            <div className="intro py-[30px] flex justify-between ">
                
                <div className="warranty flex items-center gap-[17.06px]">
                <RiNumber2 className=' w-[13.5px] h-[19.94px]' />
                <p className='font-DM text-[16px] text-[#6D6D6D]'>Two years warranty</p>
                </div>

                <div className="shipping flex items-center gap-[15px]">
                <MdLocalShipping />
                <p className='font-DM text-[16px] text-[#6D6D6D]'>Free shipping</p>
                </div>

                <div className="return flex items-center gap-[15px]">
                <FaArrowRotateLeft />
                <p className='font-DM text-[16px] text-[#6D6D6D]'>Return policy in 30 days</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Intro