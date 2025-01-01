import React, { useState } from 'react';
import Container from '../Layer/Container';
import Bredcumb from '../Layer/Bredcumb';
import TitleHeader from '../Layer/TitleHeader';
import Input from '../Layer/Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from '../Layer/Button';

const LogIn = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Container className="pt-[60px] md:pt-[124px] pb-[60px] md:pb-[140px]">
        <Bredcumb />

        <div className="border-b mt-10 md:mt-[127px]">
          <p className="font-DM text-[14px] md:text-[16px] text-[#767676] w-full md:w-[644px] pb-8 md:pb-[62px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
        </div>

        <div className="mt-10 md:mt-[57px] border-b pb-8 md:pb-[69px]">
          <div className="flex flex-wrap gap-x-6 gap-y-6">
            <TitleHeader className="mb-6 md:mb-[42px] w-full" headerText="Returning Customer" />
            
            <Input
              className="w-full md:w-[507px]"
              id="Email"
              labelText="Email address"
              type="text"
              placeholder="company@domain.com"
            />

            <div className="w-full md:w-[507px] relative">
              <Input
                id="Password"
                labelText="Password"
                type={show ? 'text' : 'password'}
                placeholder="Password"
              >
                {show ? (
                  <FaEye
                    onClick={() => setShow(!show)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[#767676] cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShow(!show)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[#767676] cursor-pointer"
                  />
                )}
              </Input>
            </div>
          </div>

          <div>
            <Button className="w-[150px] md:w-[200px] text-[#262626] mt-6" ButtonText="Log in" />
          </div>
        </div>

        <div className="mt-10 md:mt-[58px]">
          <TitleHeader headerText="New Customer" />
          <p className="font-DM text-[14px] md:text-[16px] text-[#767676] w-full md:w-[644px] mt-4 md:mt-[38px] mb-6 md:mb-[51px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>
          <Button className="w-[150px] md:w-[200px] text-[#262626]" ButtonText="Continue" />
        </div>
      </Container>
    </div>
  );
};

export default LogIn;
