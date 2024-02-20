import React from "react";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <section className="Footer bg-blue-950 text-white p-3 lg:p-10 py-40 lg:py-20 flex flex-col items-center relative mt-44">
        <div className="initial-content bg-slate-50 flex flex-col lg:flex-row align-middle lg:justify-between justify-center items-center px-10 py-5 text-black w-[80%] rounded-lg absolute top-[-10%] lg:top-[-15%]">
          <p>
            Ready to get started? <br />
            Talk to us today
          </p>
          <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md w-32 mt-5">
            Get Started
          </button>
        </div>
        <div className="Footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 align-middle justify-center">
          <div className="items">
            <p className="mb-3">Ecommerce Store</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              veritatis?
            </p>
          </div>
          <div className="items">
            <p className="mb-3">Subscribe to get important updates</p>
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 mb-4 rounded-md"
            />
            <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md block">
              SUBSCRIBE
            </button>
          </div>
          <div className="items">
            <p>Follow Us</p>
            <div className="social-icons flex items-center">
              <div className="h-10 w-10 rounded-full mr-3 border-white border-2 flex items-center justify-center">
                <RxDiscordLogo />
              </div>
              <div className="h-10 w-10 rounded-full m-3 border-white border-2 flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="h-10 w-10 rounded-full m-3 border-white border-2 flex items-center justify-center">
                <FiYoutube />
              </div>
            </div>
          </div>
          <div className="items">
            <p>Call Us</p>
            <p>+92 3145642492</p>
          </div>
        </div>
        <hr className="bg-white w-full mt-4" />

        <div className="bottom-footer my-4 flex flex-col lg:flex-row align-middle gap-4 lg:justify-between justify-center items-center w-full ">
          <p>{new Date().getFullYear()} Ecommerce store All rights reserved</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
