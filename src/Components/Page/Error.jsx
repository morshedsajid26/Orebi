import React from 'react';
import Container from '../Layer/Container';
import { FaSearch } from 'react-icons/fa';
import Button from '../Layer/Button';

const Error = () => {
  return (
    <div>
      <Container className="pt-20 pb-[140px] flex flex-col items-center">
        <div className="w-full max-w-[652px] text-center px-4">
          <h1 className="text-[100px] md:text-[150px] lg:text-[200px] font-bold font-DM">404</h1>

          <p className="text-[14px] md:text-[16px] text-[#767676] mt-4">
            The page you were looking for couldn't be found. The page could be removed, or you misspelled the word while searching for it. Maybe try a search?
          </p>

          <div className="relative mt-[30px] md:mt-[50px] mb-[40px] md:mb-[60px]">
            <input
              className="w-full py-4 md:py-5 px-4 md:px-5 outline-none bg-white border"
              type="text"
              placeholder="Type to search"
            />
            <FaSearch className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 text-black" />
          </div>
        </div>

        <Button
          ButtonText="Back to Home"
          className="w-[150px] md:w-[200px] h-[40px] md:h-[50px]"
          href="/"
        />
      </Container>
    </div>
  );
};

export default Error;
