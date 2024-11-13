import React from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import { ImCross } from 'react-icons/im'
import { Image } from 'antd'
import cart1 from '/cart1.png'

const Cart = () => {
  return (
    <div className='pt-[124px] pb-[140px]'>
        <Container>
            <Bredcumb/>

            <div className='pt-[136px]'>
              <div className="top grid grid-cols-4 bg-[#F5F5F3] py-8 font-DM text-[16px] font-bold text-[#262626] pl-5">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>

              <div className="bottom grid grid-cols-4 border border-t-0 py-[30px]  pl-5 items-center">
                
                <div className='flex items-center '>
                <ImCross className='h-2.5 w-2.5' />
                <div className='ml-10 mr-5' >
                <Image src={cart1}/>
                </div>
                <h6 className='font-DM text-[16px] font-bold text-[#262626]'>
                  Product name
                  </h6>
                </div>

                <div >
                  <h6 className='font-DM text-[20px] font-bold text-[#262626]'>$44.00</h6>
                </div>

                <div>1</div>
                <div>1</div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Cart