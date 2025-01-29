import React, { useEffect, useState } from 'react';
import Container from './Layer/Container';
import TitleHeader from './Layer/TitleHeader';
import ProductCard from './Layer/ProductCard';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import axios from 'axios';

const Arrivals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setItems(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='absolute w-12 h-12 sm:w-16 sm:h-16 right-2 sm:right-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#979797] rounded-full cursor-pointer hover:bg-[#767676] transition-all duration-300'
        onClick={onClick}
      >
        <FaLongArrowAltRight className='text-white text-lg sm:text-xl' />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='absolute w-12 h-12 sm:w-16 sm:h-16 left-2 sm:left-0 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#979797] rounded-full cursor-pointer hover:bg-[#767676] transition-all duration-300 z-10'
        onClick={onClick}
      >
        <FaLongArrowAltLeft className='text-white text-lg sm:text-xl' />
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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Laptops
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
      { breakpoint: 640, settings: { slidesToShow: 1 } }   // Mobile Phones
    ]
  };

  return (
    <div>
      <Container>
        <TitleHeader headerText='New Arrivals' />
      </Container>

      <Container className='max-w-[1640px] mt-12'>
        <Slider {...settings}>
          {items.map((item, i) => (
            <ProductCard
              key={i}
              src={item.thumbnail}
              pName={item.title}
              price={item.price}
              colour={item.brand}
              offer={item.discountPercentage}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Arrivals;
