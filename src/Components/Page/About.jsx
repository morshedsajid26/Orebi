import React from 'react';
import Container from '../Layer/Container';
import Bredcumb from '../Layer/Bredcumb';
import Image from '../Layer/Image';
import Button from '../Layer/Button';

import product1 from '/About/product1.png';
import product2 from '/About/product2.png';

const About = () => {
  return (
    <div>
      <Container className="py-10 md:py-[130px]">
        <Bredcumb />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-10 lg:mt-[136px]">
          <div className="relative">
            <Image src={product1} alt="Product 1" />
            <Button
              className="px-6 py-3 lg:px-[97px] lg:py-7 absolute bottom-4 lg:bottom-[62px] left-1/2 transform -translate-x-1/2"
              ButtonText="Our Brands"
            />
          </div>
          <div className="relative">
            <Image src={product2} alt="Product 2" />
            <Button
              className="px-6 py-3 lg:px-[99px] lg:py-7 absolute bottom-4 lg:bottom-[62px] left-1/2 transform -translate-x-1/2"
              ButtonText="Our Store"
            />
          </div>
        </div>

        <p className="text-lg md:text-[39px] font-DM text-[#262626] my-10 md:my-[120px] text-center">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          worldwide cool-looking style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <div>
            <h3 className="text-lg md:text-[25px] font-DM font-bold text-[#262626]">
              Our Vision
            </h3>
            <p className="text-sm md:text-[16px] font-DM text-[#767676] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-[25px] font-DM font-bold text-[#262626]">
              Our Story
            </h3>
            <p className="text-sm md:text-[16px] font-DM text-[#767676] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the leap into
              electronic.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-[25px] font-DM font-bold text-[#262626]">
              Our Brands
            </h3>
            <p className="text-sm md:text-[16px] font-DM text-[#767676] mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
