import React, { useEffect, useState } from 'react'

import { FaBarsProgress, FaCartShopping, FaUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { IoCaretDownOutline, IoClose } from 'react-icons/io5'
import Li from './Layer/Li'
import Container from './Layer/Container'
import Button from './Layer/Button'



const SearchBar = () => {
    
    let [show, setShow] = useState(false);
    let [cart, setCart] = useState(false);
    let [account, setAccount] = useState(false);


    let [search, setSearch] = useState('');
    let [product, setProduct] = useState([]);

    let [filterData, setFilterData]=useState([]);

    let manageSearch = (e)=>{
        setSearch(e.target.value)
    }


    useEffect(()=>{
        const getData = async ()=>{
          
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          
          setProduct(data.products );
        }
        getData()
      },[])

      
    useEffect(() => {
        if(search === ''){
            setFilterData('')
        }
        else{
            let searchData = product.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterData(searchData);
        }
      },[search,product])

 

    return (
        <div className='bg-[#F5F5F3] py-3 md:py-6 relative '>
            <Container className="flex justify-between relative gap-3 md:gap-0 px-3 md:px-0">
                <div onClick={()=> setShow(!show)} className="category flex items-center gap-2.5">
                    <FaBarsProgress />
                    <p className='font-DM hidden md:block'>Shop by Category</p>
                </div>

                {
                    show &&(
                        <ul className='catddm absolute left-0 top-full bg-slate-200 w-[263px] z-10'>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Accesories">
                            {/* <div className='absolute hidden group-hover:flex gap-10 left-full top-0 bg-gray-300 p-10 h-full'>
                                <ul className='flex flex-col gap-3'>
                                    <h2 className='mb-2'>Bangladesh</h2>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                </ul>
                                <ul className=''>
                                <h2>Bangladesh</h2>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                </ul>
                                <ul className=''>
                                <h2>Bangladesh</h2>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                    <li>hdasild</li>
                                </ul>
                            </div> */}


                    </Li>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Furniture">
                        {/* <div className='absolute hidden group-hover:flex gap-10 left-full top-0 bg-gray-300 p-10 h-full'>
                            <ul className='flex flex-col gap-3'>
                                <h2 className='mb-2'>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                        </div> */}


                    </Li>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Electronics ">
                    
                        <div className=' static md:absolute hidden group-hover:flex flex-wrap md:flex-nowrap gap-10 left-full top-0 bg-gray-300 py-6 px-10 h-full'>

                        <ul className='flex flex-col gap-3 font-DM'>
                                <h2 className='mb-2 w-[90px] font-bold text-[16px]'>Phones</h2>
                                <li className='text-[#767676] hover:text-black hover:font-bold  '>Phones 1</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 2</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 3</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 4</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 5</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 6</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Phones 7</li>
                            </ul>

                            <ul className='flex flex-col gap-3 font-DM'>
                                <h2 className='mb-2 w-[110px] font-bold text-[16px]'>Computers</h2>
                                <li className='text-[#767676] hover:text-black hover:font-bold  '>Computers 1</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 2</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 3</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 4</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 5</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 6</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Computers 7</li>
                            </ul>
                            <ul className='flex flex-col gap-3 font-DM'>
                                <h2 className='mb-2 w-[130px] font-bold text-[16px]'>Smart watches</h2>
                                <li className='text-[#767676] hover:text-black hover:font-bold  '>Smart watches 1</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 2</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 3</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 4</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 5</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 6</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Smart watches 7</li>
                            </ul>
                            <ul className='flex flex-col gap-3 font-DM'>
                                <h2 className='mb-2 w-[90px] font-bold text-[16px]'>Cameras</h2>
                                <li className='text-[#767676] hover:text-black hover:font-bold  '>Cameras 1</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 2</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 3</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 4</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 5</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 6</li>
                                <li className='text-[#767676] hover:text-black hover:font-bold '>Cameras 7</li>
                            </ul>
                        </div>


                    </Li>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Clothes">
                        {/* <div className='absolute hidden group-hover:flex gap-10 left-full top-0 bg-gray-300 p-10 h-full'>
                            <ul className='flex flex-col gap-3'>
                                <h2 className='mb-2'>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                        </div> */}


                    </Li>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Bags">
                        {/* <div className='absolute hidden group-hover:flex gap-10 left-full top-0 bg-gray-300 p-10 h-full'>
                            <ul className='flex flex-col gap-3'>
                                <h2 className='mb-2'>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                        </div> */}


                    </Li>
                    <Li className="font-DM w-full block bg-[#262626] text-white/70 py-4 px-5 hover:text-white hover:pl-[31px] border-b  border-[#2D2D2D]" liText="Home Appliances">
                        {/* <div className='absolute hidden group-hover:flex gap-10 left-full top-0 bg-gray-300 p-10 h-full'>
                            <ul className='flex flex-col gap-3'>
                                <h2 className='mb-2'>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                            <ul className=''>
                            <h2>Bangladesh</h2>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                                <li>hdasild</li>
                            </ul>
                        </div> */}


                    </Li>
                   
                        </ul>
                    )
                }


                <div className="search relative w-full md:w-auto">
                    <input className='md:w-[601px] w-full  py-2 px-3 md:py-4 md:px-5 outline-none bg-white ' type="text" placeholder='Search Products'
                    onChange={manageSearch}
                    value={search} />
                    <FaSearch className='absolute right-3 md:right-5 top-1/2 -translate-y-1/2' />
                </div>
                <div className="account items-center gap-10 hidden md:flex">
                    <div onClick={()=> setAccount(!account)} className="left flex items-center">
                        <FaUser />
                        <IoCaretDownOutline />
                    </div>

                    <div onClick={()=> setCart(!cart) }  className="right">
                        <FaCartShopping />
                    </div>
                </div>

                

                {
                    cart&&(

                        <div className="cart w-[360px] h-[241px] absolute bg-[#FFFFFF] right-0 top-full z-10 ">
                    <div className="top bg-[#F5F5F3] flex justify-between items-center p-5">
                        <div className="imgae flex gap-5 items-center">
                        <img className=" w-20 h-20 bg-slate-500" src="" alt=""  />
                        <div className="text ">
                            <p className='name font-DM font-bold text-[14px] text-[#262626]'>Black Smart Watch</p>
                            <p className='price font-DM font-bold text-[14px] text-[#262626]'>$44.00</p>


                        </div>
                        </div>
                        <div   className="icon h-[10px] w-[10px] items-center"><IoClose /></div>
                    </div>

                    <div className="bottom  p-5">
                        <p className='text-14 font-DM font-bold leading-[23px]'> <span className='text-[#767676] font-normal'>Subtotal:</span> $44.00</p>
                        <div className="button flex  gap-5 mt-3">
                        <Button ButtonText='View Cart'/>
                        <Button ButtonText='Checkout'/>
                        </div>
                    </div>
                </div>

                    )                            
                }

           {
            account&&(
                <div className="account absolute flex flex-col bg w-[200px] h-[100px] right-[58px] top-full z-10">
                <Button   className='!w-full bg-black text-white' ButtonText='My Account'/>
                <Button   className='!w-full  bg-white text-black hover:bg-white hover:!text-black ' ButtonText='Log Out'/>

            </div>
            )
           }

                
            </Container>

            {
                filterData.length > 0 &&(
                    <ul className="bg-slate-300 grid  grid-cols-1 p-5 gap-2 absolute left-[850px] -translate-x-[165px] w-[601px] z-20 h-[700px] overflow-auto ">{filterData.map((item,index)=>(
                        <li className='grid grid-cols-3 p-4 bg-slate-200' key={index}>
                            <img className='h-20' src={item.thumbnail} alt="" />
                            <div className='w-[250p] flex flex-col  justify-center'>
                                <h2 className='font-DM font-bold '>{item.title}</h2>
                                <p className='font-DM '>${item.price}</p>
                            </div> 
                            <div className='flex flex-col items-center justify-center gap-y-4'>
                                <button className='py-2 px-4 bg-orange-400 font-DM'>Add to cart</button>
                                <button className='py-2 px-4 bg-orange-400 font-DM'>Wishlist</button>
                            </div>
                        </li>

                    ))}</ul>
                )
            }
        </div>
    )
}

export default SearchBar