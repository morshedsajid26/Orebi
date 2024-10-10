import React, { useState } from 'react'
import Slider from 'react-slick';

import banner1 from '/Banner/banner1.png'
import banner2 from '/Banner/banner2.png'
import Image from './Layer/Image';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  let [active, setActive] = useState(0)



  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    appendDots: dots => (
      <div
        style={{
          borderRadius: "0",
          padding: "0", 
          position: 'absolute',
          left: '12%',
          top: '50%',
          transform: "translateY(-50%)",

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`transition-all duration-500 text-[10px] border-r-2 flex items-center ${active == i ? "text-black border-black" : "text-transparent border-white"}`}
        style={{
          width: "22px",
          height: "30px",
          color: "",
          border: "px black solid"
        }}
      >
        0{i + 1}
      </div>
    ),

    beforeChange: (item,i)=>{
      setActive(i)
    },

    responsive: [
    
      {
        breakpoint: 680,
        settings: {

          appendDots: dots => (
            <div
              style={{
                borderRadius: "0",
                padding: "0", 
                position: 'absolute',
                left: '50%',
                bottom: '15%',
                transform: "translateX(-50%)",
      
              }}
            >
              <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`transition-all duration-500 text-[10px] border-b-2 flex justify-center ${active == i ? "text-black border-black" : "text-transparent border-white"}`}
              style={{
                width: "18px",
                height: "20px",
                color: "",
                border: "px black solid"
              }}
            >
              0{i + 1}
            </div>
          )
          
        }
      }
    ]


  };

  return (
    <div>

<Slider   {...settings}>
   
    <Image imageClass='w-full' src={banner1}/>
     <Image imageClass='w-full' src={banner2}/>
     <Image imageClass='w-full' src={banner1}/>
    
    
    </Slider>
    

    </div>
  )
}

export default Banner