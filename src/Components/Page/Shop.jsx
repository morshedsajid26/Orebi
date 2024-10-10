import React, { useState } from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import { IoGrid, IoGridOutline } from 'react-icons/io5'
import { FaList, FaMinus, FaPlus } from 'react-icons/fa'
import Paginate from '../Layer/Paginate'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const Shop = () => {

  let [showNumber, setshowNumber] = useState(12);

  let numberUpdate = (element )=> {
    let NumberCollect= Number(element.target.value)

    setshowNumber(NumberCollect)

  };

  let [cat , setCat]=useState(false);
  let [cat2 , setCat2]=useState(false);
  let [color , setColor]=useState(false);
  let [brand , setBrand]=useState(false);

  

  
  



  return (
    <div>
        <Container className='pt-[124px] pb-[140px]'>
          <Bredcumb/>

          <div className='flex justify-between mt-[127px]'>
            <div className="left w-[373px] bg-slate-00 ">
              <div className="category ">
                <h3 className='font-DM font-bold text-[20px] text-[#262626]'>Shop by Category</h3>
                <ul className='flex flex-col gap-5 mt-9 text-[#767676] font-DM text-[16px]'>
                  <li className='relative'>
                    
                    <div onClick={()=> setCat(!cat)} className='relative w-full cursor-pointer border-b pb-[19px] '><span>Category 1</span> 
                     {
                       cat?<FaMinus className={`absolute top-0 right-3 `}/>:
                       <FaPlus className={`absolute top-0 right-3 `}/>
                     }
                    </div>

                    <ul className={`w-full flex flex-col gap-y-5 bg-slate-100  ${cat? "opacity-100 h-auto visible overflow-auto p-4":"opacity-0 h-0 invisible overflow-hidden p-0"}`}>
                       <li>Category 1.1</li>
                       <li>Category 1.1</li>
                       <li>Category 1.1</li>
                       <li>Category 1.1</li>
                        </ul>     

                            
                  </li>
                  
                  
                  <li className='border-b pb-[19px]'>Category 2</li>
                  <li className='relative'>
                    
                    <div onClick={()=> setCat2(!cat2)} className='relative w-full cursor-pointer border-b pb-[19px] '><span>Category 3</span> 
                     {
                       cat2?<FaMinus className={`absolute top-0 right-3 `}/>:
                       <FaPlus className={`absolute top-0 right-3 `}/>
                     }
                    </div>

                    <ul className={` w-full flex flex-col gap-y-5 bg-slate-100 ${cat2? "opacity-100 h-auto visible overflow-auto p-4":"opacity-0 h-0 invisible overflow-hidden p-0"}`}>
                       <li>Category 3.1</li>
                       <li>Category 3.1</li>
                       <li>Category 3.1</li>
                       <li>Category 3.1</li>
                        </ul>     

                            
                  </li>
                  <li className='border-b pb-[19px]'>Category 4</li>
                  <li className='border-b pb-[19px]'>Category 5</li>
                </ul>
              </div>

              <div className="color mt-[53px] ">

         
                  <div className=' relative '>
                    <span  className='font-DM font-bold text-[20px] text-[#262626] '>Shop by Color</span>

                  {
                    color? <TiArrowSortedUp  onClick={()=> setColor(!color)}  className={`absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer`}/>:
                    <TiArrowSortedDown  onClick={()=> setColor(!color)}  className={`absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer`}/>
                  }

                  </div>


                  <ul className={`flex flex-col gap-5  text-[#767676]  font-DM text-[16px] ${color?"opacity-100 h-auto visible overflow-auto mt-9":"opacity-0 h-0 invisible overflow-hidden mt-0"}`}>
                    <li className='border-b  pb-[19px] '><span className='inline-block w-2.5 h-2.5 mr-2.5  rounded-full bg-[#000000]'></span>Color 1</li>
                    <li className='border-b  pb-[19px] '><span className='inline-block w-2.5 h-2.5 mr-2.5  rounded-full bg-[#FF8686]'></span>Color 2</li>
                    <li className='border-b  pb-[19px]'><span className='inline-block w-2.5 h-2.5 mr-2.5  rounded-full bg-[#7ED321]'></span>Color 3</li>
                    <li className='border-b  pb-[19px]'><span className='inline-block w-2.5 h-2.5 mr-2.5  rounded-full bg-[#B6B6B6]'></span>Color 4</li>
                    <li className='border-b  pb-[19px]'><span className='inline-block w-2.5 h-2.5 mr-2.5  rounded-full bg-[#15CBA5]'></span>Color 5</li>
                  </ul>
              </div>


              <div className="brand mt-[53px] ">

         
              <div className=' relative '>
                <span  className='font-DM font-bold text-[20px] text-[#262626] '>Shop by Brand</span>

               {
                brand? <TiArrowSortedUp  onClick={()=> setBrand(!brand)}  className={`absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer`}/>:
                <TiArrowSortedDown  onClick={()=> setBrand(!brand)}  className={`absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer`}/>
               }

              </div>
             

              <ul className={`flex flex-col gap-5  text-[#767676]  font-DM text-[16px] ${brand?"opacity-100 h-auto visible overflow-auto mt-9":"opacity-0 h-0 invisible overflow-hidden mt-0"}`}>
                <li className='border-b pb-[19px]'>Brand 1</li>
                <li className='border-b pb-[19px]'>Brand 2</li>
                <li className='border-b pb-[19px]'>Brand 3</li>
                <li className='border-b pb-[19px]'>Brand 4</li>
                <li className='border-b pb-[19px]'>Brand 5</li>
              </ul>
              </div>


              <div className="price mt-[53px]">
              <h3 className='font-DM font-bold text-[20px] text-[#262626]'>Shop by Category</h3>

              <ul className='flex flex-col gap-5 mt-9 text-[#767676] font-DM text-[16px]'>
                <li className='border-b pb-[19px]'>$0.00 - $9.99</li>
                <li className='border-b pb-[19px]'>$10.00 - $19.99</li>
                <li className='border-b pb-[19px]'>$20.00 - $29.99</li>
                <li className='border-b pb-[19px]'>$30.00 - $39.999</li>
                <li className='border-b pb-[19px]'>$40.00 - $69.99</li>
              </ul>
              </div>
            </div>
           
           
           
           
           
            <div className="right w-[1190px] pb-32">
              <div className='py-3 flex justify-between'>
                <div className='icon flex gap-5'>
                  <div className='h-9 w-9 bg-black flex items-center justify-center'>
                  <IoGrid  className='text-white ' />
                  </div>

                  <div className='h-9 w-9 bg-white border-1 border-[#F0F0F0] flex items-center justify-center'>
                  <FaList  className='text-[#737373] ' />
                  </div>
                


                </div>

                <div className="text flex gap-10"> 
                  <div className='font-DM text-[16px] text-[#767676]'>
                    Sort By:
                    <select name="" id="" className='outline-none px-5 py-[3px] ml-3.5 w-[234px] border-1 border-[#F0F0F0]  '>
                      <option value="Featured">Featured 1</option>
                      <option value="Featured">Featured 2</option>
                      <option value="Featured">Featured 3</option>
                      <option value="Featured">Featured 4</option>
                    </select>
                  </div>

                  <div className='font-DM text-[16px] text-[#767676]'>
                    Show:
                    <select onChange={numberUpdate} name="" id="" className='outline-none px-5 py-[3px] ml-3.5 w-[139px] border-1 border-[#F0F0F0]  '>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="36">36</option>
                      <option value="48">48</option>
                    </select>
                  </div>
                
                </div>
              </div>
            
            
            <div>
          <Paginate itemsPerPage={showNumber}/>
            </div>
           
            </div>
          </div>

        </Container>
    </div>
  )
}

export default Shop