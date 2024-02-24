/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const open = "h-30";
  function handleMenu() {
    setIsOpen(!IsOpen);
  }

  return (
    <>
      <header className="">
        <nav
          className="mx-auto flex items-center justify-between px-6 py-3 lg:px-8 bg-slate-50 fixed top-0 left-0 w-full z-30"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:flex-1">
            <NavLink to="/" className="m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            <NavLink
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Home
            </NavLink>

            <NavLink
              to="/About"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              About
            </NavLink>
            <NavLink
              to="/Products"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Products
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Contact
            </NavLink>
            <NavLink to="/Login">
              <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md">
                Login
              </button>
            </NavLink>
            <NavLink
              to="/Cart"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 relative"
            >
              <FiShoppingCart className="h-8 w-8" />
              <div className="h-4 w-4 bg-blue-500 text-white  rounded-full flex items-center justify-center absolute top-0 right-[-2px]">
                0
              </div>
            </NavLink>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div className="lg:hidden relative" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          {/* <div className="fixed inset-0 z-0"></div> */}
          <div className="fixed inset-y-0 h-20 right-0 z-30 w-full overflow-y-auto px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10 bg-slate-50">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </NavLink>
              {IsOpen ? (
                <IoClose className="h-5 w-5 " onClick={handleMenu} />
              ) : (
                <IoMenu className="h-5 w-5 " onClick={handleMenu} />
              )}
            </div>
          </div>

          <div
            className="fixed top-24 left-[50%] transform -translate-x-1/2 rounded-md py-3 px-6 w-80 bg-[rgba(96,203,222,0.1)] backdrop-blur-[10px] flex flex-col gap-y-6 items-center justify-center z-30 text-lg"
            style={{
              transition: "height 0.3s ease-in, visibility 0.3s ease",
              overflow: "hidden",
              height: IsOpen ? "350px" : "0",
              visibility: IsOpen ? "visible" : "hidden", // Control visibility
            }}
          >
            <NavLink to="/" className=" text-black  hover:text-blue-500">
              Home
            </NavLink>
            <NavLink to="/About" className=" text-gray-900 hover:text-blue-500">
              About
            </NavLink>
            <NavLink
              to="/Products"
              className=" text-gray-900 hover:text-blue-500"
            >
              Products
            </NavLink>
            <NavLink
              to="/Contact"
              className=" text-gray-900 hover:text-blue-500"
            >
              Contact
            </NavLink>
            <NavLink to="/Login">
              <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md">
                Login
              </button>
            </NavLink>
            <NavLink
              to="/Contact"
              className=" text-gray-900 hover:text-blue-500 relative"
            >
              <FiShoppingCart className="h-8 w-8" />
              <div className="h-4 w-4 bg-blue-500 text-white  rounded-full flex items-center justify-center absolute top-0 right-[-1px]">
                1
              </div>
            </NavLink>

            {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
