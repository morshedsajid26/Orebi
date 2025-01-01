import React from 'react';
import Container from '../Layer/Container';
import Button from '../Layer/Button';
import Bredcumb from '../Layer/Bredcumb';
import { ImCross } from 'react-icons/im';
import { Image } from 'antd';
import cart1 from '/cart1.png';

const Cart = () => {
  return (
    <div className="pt-[124px] pb-[140px]">
      <Container>
        <Bredcumb />

        <div className="pt-[136px]">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-4 bg-[#F5F5F3] py-4 font-DM text-[16px] font-bold text-[#262626] px-5">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {/* Product Rows */}
          <div className="grid md:grid-cols-4 grid-cols-1 border border-t-0 py-6 px-5 items-center gap-y-4">
            {/* Product Column */}
            <div className="flex items-center md:col-span-1 col-span-full">
              <ImCross className="h-3 w-3 md:mr-5 mr-2" />
              <div className="md:ml-10 mr-5">
                <Image src={cart1} className="w-[60px] h-[60px] object-cover" />
              </div>
              <h6 className="font-DM text-[16px] font-bold text-[#262626]">Product name</h6>
            </div>

            {/* Price Column */}
            <div className="md:col-span-1 col-span-full">
              <h6 className="font-DM text-[20px] font-bold text-[#262626]">$44.00</h6>
            </div>

            {/* Quantity Column */}
            <div className="md:col-span-1 col-span-full text-center">
              <h6 className="font-DM text-[16px] text-[#767676]">1</h6>
            </div>

            {/* Total Column */}
            <div className="md:col-span-1 col-span-full">
              <h6 className="font-DM text-[20px] font-bold text-[#262626]">$44.00</h6>
            </div>
          </div>

          {/* Coupon and Update Section */}
          <div className="flex flex-wrap justify-between border border-t-0 p-5 gap-y-4">
            <input
              className="py-2.5 pl-2.5 w-full md:w-auto flex-grow border border-gray-300"
              type="text"
              placeholder="Apply coupon"
            />
            <button className="font-DM text-[14px] font-bold text-[#262626] px-4 py-2 bg-gray-200 hover:bg-gray-300">
              Update cart
            </button>
          </div>

          {/* Cart Totals */}
          <div className="mt-14 flex flex-col items-center md:items-end">
            <h5 className="font-DM text-[20px] font-bold text-[#262626]">Cart totals</h5>

            <table className="my-7 w-full md:w-auto">
              <tbody>
                <tr>
                  <td className="border py-4 px-5">
                    <h6 className="font-DM text-[14px] font-bold text-[#262626]">Subtotal</h6>
                  </td>
                  <td className="border py-4 px-5 text-right">
                    <h6 className="font-DM text-[16px] text-[#767676]">389.99 $</h6>
                  </td>
                </tr>
                <tr>
                  <td className="border py-4 px-5">
                    <h6 className="font-DM text-[14px] font-bold text-[#262626]">Total</h6>
                  </td>
                  <td className="border py-4 px-5 text-right">
                    <h6 className="font-DM text-[16px] text-[#262626]">389.99 $</h6>
                  </td>
                </tr>
              </tbody>
            </table>

            <Button className="w-full md:w-[200px]">Proceed to Checkout</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
