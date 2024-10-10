import React, { useState } from 'react'
import Bredcumb from '../Layer/Bredcumb'
import Container from '../Layer/Container'
import Image from '../Layer/Image'
import Button from '../Layer/Button'
import Input from '../Layer/Input'

import product13 from '/Product/product 13.png'
import product10 from '/Product/product 10.png'
import product12 from '/Product/product 12.png'
import product11 from '/Product/product 11.png'
import TitleHeader from '../Layer/TitleHeader'
import { FaAngleDown, FaMinus, FaPlus, FaStar } from 'react-icons/fa'

const ProductDetails = () => {

    let [show,setShow]= useState(false);

    let [size,setSize]= useState("S");

    let manageSize = (element)=> {
        setSize(element.target.value)

    };

    let [quantity,setQuantity]=useState("1");

    let [accordiant1,setAccordiant1]=useState(false);
    let [accordiant2,setAccordiant2]=useState(false);

  return (
    <div>
        <Container className='my-40'>
            <Bredcumb/>

            <div className=' h-[1600px] gap-10 grid grid-cols-2 grid-rows-2 mt-[136px] mb-[49px]'>

              
                
                <div className="pshow   ">
                    <Image imageClass='w-full h-full object-cover ' src={product13}/>
                </div>
                <div className="pshow   ">
                    <Image imageClass='w-full h-full object-cover ' src={product12}/>
                </div>
                <div className="pshow   ">
                    <Image imageClass='w-full h-full object-cover ' src={product11}/>
                </div>
                <div className="pshow   ">
                    <Image imageClass='w-full h-full object-cover ' src={product10}/>
                </div>
               
                

            </div>

            <TitleHeader headerText='Product'/>

            <div className="details w-[780px]">
            <div className='reviewIcon flex gap-6 items-center'>
                <div className="icon flex gap-[2px] text-[#FFD881]">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                <p className='font-DM text-[14px] text-[#767676]'>1 Review</p>
            </div>

            <div className="price border-b w-full mt-5 pb-4">
                <p className='font-DM font-bold text-[20px] text-[#262626] flex gap-[22px] items-center'>
                    <del className='font-normal text-[16px] text-[#767676]'>$88.00</del>
                     $44.00</p>
            </div>

            
               <ul >
                <li className='flex items-center gap-[52px] mt-[29px]'>
                    <b className='font-bold font-DM text-[16px] text-[#262626]'>COLOR:</b>

                   <div className='flex gap-4'>
                   <span className='inline-block w-5 h-5  rounded-full bg-[#979797]'></span>
                    <span className='inline-block w-5 h-5  rounded-full bg-[#FF8686]'></span>
                    <span className='inline-block w-5 h-5  rounded-full bg-[#7ED321]'></span>
                    <span className='inline-block w-5 h-5  rounded-full bg-[#B6B6B6]'></span>
                    <span className='inline-block w-5 h-5  rounded-full bg-[#15CBA5]'></span>
                   </div>
                </li>


                <li className='flex items-center mt-[30px] gap-[76px]'>
                    <b className='font-DM text-[16px] text-[#262626]'>SIZE:</b>
                    <div className='w-[139px] px-5 py-1 border flex items-center relative  '>
                        <p className='font-DM text-[#767676] '>{size}</p>
                        
                        <div onClick={()=> setShow(!show)} className='text-[#767676] absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer'>
                            <FaAngleDown />
                        </div>
                        <ul onClick={manageSize} className={`absolute w-full top-full left-0 over border-l border-t border-r  ${
                            show?"left-0 opacity-100 visible":"left-full opacity-0 invisible"
                        }`}>
                            <input value='S'  className='font-DM text-[#767676] cursor-pointer outline-none w-full border-b px-5 py-1' />
                            <input value='M'  className='font-DM text-[#767676] cursor-pointer outline-none w-full border-b px-5 py-1' />
                            <input value='L'  className='font-DM text-[#767676] cursor-pointer outline-none w-full border-b px-5 py-1' />
                            <input value='XL'  className='font-DM text-[#767676] cursor-pointer outline-none w-full border-b px-5 py-1' />
                        </ul>
                    </div>
                </li>


                <li className='flex items-center pb-[30px] mt-[30px] gap-[29px] border-b w-full'>
                    <b className='font-DM text-[16px] text-[#262626]'>QUANTITY:</b>
                    <div className='border w-[139px] flex items-center gap-9 justify-center '>
                        <span onClick={()=> setQuantity(quantity > 1 ? quantity-- : quantity )} className='   text-[#767676] w-9 justify-center  h-8 flex items-center cursor-pointer'><FaPlus/></span>
                        <span className=' w-10 font-DM text-[#767676] text-[20px] flex items-center justify-center'>{quantity}</span>
                        <span onClick={()=> setQuantity(quantity++)} className='  text-[#767676]  w-9 justify-center h-8 flex items-center cursor-pointer'><FaMinus/></span>
                    </div>
                </li>

                <li className='flex gap-7 border-b py-6'>
                    <b className='font-DM text-[16px] text-[#262626]'>STATUS:</b>
                    <p className='font-DM text-[16px] text-[#767676]'>In stock</p>
                </li>
               </ul>


            </div>

            <div className="button flex gap-5 py-[30px] border-b w-[780px] ">
                <Button className='h-[50px] w-[200px] font-DM text-[14px] flex items-center justify-center' ButtonText='Add to Wish List'/>
                <Button className='h-[50px] w-[200px] font-DM text-[14px] flex items-center justify-center' ButtonText='Add to Cart'/>
            </div>

            <div className="accordation w-[780px]">
                <ul>
                    <li  className='relative' >
                       <div onClick={()=> setAccordiant1(!accordiant1)} className='border-b py-6  relative cursor-pointer  '>
                         <span className='font-DM font-bold text-[16px] text-[#262626] '>FEATURES  & DETAILS</span>
                        
                        {
                            accordiant1?<FaMinus  className={`absolute top-1/2 -translate-y-1/2 right-3 `}/>:<FaPlus className={`absolute top-1/2 -translate-y-1/2 right-3 `}/>
                        }
                        </div>
                     

                        <div className={` bg-slate-100 text-[16px] ${accordiant1? "opacity-100 h-auto  overflow-auto p-2.5  ":"h-0 overflow-hidden opacity-0 p-0  "}`}>
                            <p className='font-DM text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>
                        </div>
                    </li>


                    <li  className='relative' >
                       <div onClick={()=> setAccordiant2(!accordiant2)} className='border-b py-6  relative cursor-pointer  '>
                         <span className='font-DM font-bold text-[16px] text-[#262626] '>SHIPPING & RETURNS</span>
                        
                        {
                            accordiant2?<FaMinus  className={`absolute top-1/2 -translate-y-1/2 right-3 `}/>:<FaPlus className={`absolute top-1/2 -translate-y-1/2 right-3 `}/>
                        }
                        </div>
                     

                        <div className={` bg-slate-100 text-[16px] ${accordiant2? "opacity-100 h-auto  overflow-auto p-2.5  ":"h-0 overflow-hidden opacity-0 p-0  "}`}>
                            <p className='font-DM text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>
                        </div>
                    </li>
                  
                    


                
                  
                   
                </ul>
            </div>

            <div className="descripton mt-[123px] w-[1602px]">
              <div className='border-b pb-4'>
              <div className="button flex gap-[62px] ">
               
               <button className='font-DM text-[20px] text-[#767676] '>
                Description
                </button>

               <button className='font-DM font-bold text-[20px] text-[#262626] '>
                Review(1)
               </button>
               </div>

               <p className='font-DM text-[14px] text-[#767676] mt-[42px]'>1 review for Product</p>

              </div>

              <div className="review border-b pt-6 pb-4">
                <div className='flex items-center gap-9
                '>
                    <p className='font-DM text-[16px] text-[#262626]'>John Ford</p>
                    <div className="icons flex gap-0.5 text-[#FFD881]">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <p className='font-DM text-[16px] text-[#767676] mt-3.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>

              <div className="addReview w-[780]">
                <h5 className='font-DM font-bold text-[20px] text-[#262626] mt-[53px]'>Add a Review </h5>

                <Input labelText='Name' placeholder='Your name here' className='w-[780px] mt-[48px]'/>

                <Input labelText='Email' placeholder='Your email here' className='w-[780px] my-6'/>

                <Input labelText='Review' placeholder='Your review here' className='w-[780px] pb-[86px] mb-7'/>

                <Button className='h-[50px] w-[200px] flex items-center justify-center ' ButtonText='Post'/>


              </div>
            </div>
            


        </Container>
    </div>
  )
}

export default ProductDetails