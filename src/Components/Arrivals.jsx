import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'
import ProductCard from './Layer/ProductCard'

import product1 from '/Product/product 1.png'
import product2 from '/Product/product 2.png'
import product3 from '/Product/product 3.png'
import product4 from '/Product/product 4.png'
import Slider from 'react-slick'

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

import axios from 'axios'

const Arrivals = () => {
  const [items, setItems] = useState([]);


  useEffect(()=>{
    const getData = async ()=>{
      
      const response = await axios.get('https://dummyjson.com/products')
      // const data = await response.json()
      
      setItems(response.data.products );
    }
    getData()
  },[])

  
function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className='absolute w-16 h-16 right-5 top-[40%] -translate-y-[40%] rounded-full items-center justify-center bg-[#979797] '
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div><FaLongArrowAltRight className='text-white' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
     className='absolute w-16 h-16 left-5 top-[40%] -translate-y-[40%] rounded-full items-center justify-center bg-[#979797] z-10 '
      style={{ ...style,display: "flex",background: "" }}
      onClick={onClick}
    >
       <div><FaLongArrowAltLeft className='text-white' />
       </div>
    </div>
  );
}



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className=''>
        <Container className=''>
           <TitleHeader headerText='New Arrivals'/>

           
        </Container>

       


        <Container className='max-w-[1640px] mt-12'>
        
        <Slider {...settings}>
      
       


                {
                  items.map((item,i)=>(

                    <ProductCard key={i} Pclass=''
                            src={item.thumbnail} 
                            pName={item.title} 
                            price={item.price} 
                            colour={item.brand} 
                            offer={item.discountPercentage} />


                  ))
                  
                }
      
    </Slider>
    
        </Container>
    </div>
  )
}

export default Arrivals