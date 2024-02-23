import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Features = () => {
  return (
    <>
      <section className="features px-6 lg:px-36 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-slate-50 p-5 rounded-md flex flex-row w-auto md:flex-col  justify-center items-center">
            <div className="logo w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <TbTruckDelivery className="h-5 w-5 text-blue-500" />
            </div>

            <p>Super Fast and Free delivery</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" bg-slate-50 p-5 rounded-md flex flex-row justify-center items-center">
              <div className="logo w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <MdSecurity className="h-5 w-5 text-blue-500" />
              </div>
              <p>Non Contact Shipping</p>
            </div>
            <div className=" bg-slate-50  p-5 rounded-md flex flex-row justify-center items-center">
              <div className="logo w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <GiReceiveMoney className="h-5 w-5 text-blue-500" />
              </div>
              <p>Money back Guaranteed</p>
            </div>
          </div>
          <div className="bg-slate-50 p-5 rounded-md flex flex-row w-auto md:flex-col  justify-center items-center">
            <div className="logo w-10 h-10 flex items-center justify-center bg-white rounded-full">
              <RiSecurePaymentLine className="h-5 w-5 text-blue-500" />
            </div>
            <p>Super Secure Payment Method</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
