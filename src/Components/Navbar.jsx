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
      <header class="">
        <nav
          class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-slate-50"
          aria-label="Global"
        >
          <div class="hidden lg:flex lg:flex-1">
            <NavLink to="/" class="m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
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
          <div class="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/"
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Home
            </NavLink>

            <NavLink
              to="/About"
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              About
            </NavLink>
            <NavLink
              to="/Products"
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Products
            </NavLink>
            <NavLink
              to="/Contact"
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
            >
              Contact
            </NavLink>
            <NavLink
              to="/Cart"
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500 relative"
            >
              <FiShoppingCart className="h-8 w-8" />
              <div className="h-4 w-4 bg-blue-500 text-white  rounded-full flex items-center justify-center absolute top-0 right-[-1px]">
                0
              </div>
            </NavLink>
          </div>
          {/* <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div class="lg:hidden relative" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          {/* <div class="fixed inset-0 z-0"></div> */}
          <div class="fixed inset-y-0 h-20 right-0 z-30 w-full overflow-y-auto px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10 bg-slate-50">
            <div class="flex items-center justify-between">
              <NavLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
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
            className="fixed top-24 left-[50%] transform -translate-x-1/2 rounded-md py-3 px-6 w-80 bg-[rgba(96,203,222,0.1)] backdrop-blur-[10px] flex flex-col gap-y-6 font-bold items-center justify-center z-30"
            style={{
              transition: "height 0.3s ease-in, visibility 0.3s ease",
              overflow: "hidden",
              height: IsOpen ? "250px" : "0",
              visibility: IsOpen ? "visible" : "hidden", // Control visibility
            }}
          >
            <NavLink to="/" class=" text-gray-900 hover:text-blue-500">
              Home
            </NavLink>
            <NavLink to="/About" class=" text-gray-900 hover:text-blue-500">
              About
            </NavLink>
            <NavLink to="/Products" class=" text-gray-900 hover:text-blue-500">
              Products
            </NavLink>
            <NavLink to="/Contact" class=" text-gray-900 hover:text-blue-500">
              Contact
            </NavLink>
            <NavLink
              to="/Contact"
              class=" text-gray-900 hover:text-blue-500 relative"
            >
              <FiShoppingCart className="h-8 w-8" />
              <div className="h-4 w-4 bg-blue-500 text-white  rounded-full flex items-center justify-center absolute top-0 right-[-1px]">
                0
              </div>
            </NavLink>

            {/* <div class="py-6">
                  <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
