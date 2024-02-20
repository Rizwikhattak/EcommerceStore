import React from "react";
import hero from "../Assets/hero.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = ({ heading }) => {
  return (
    <>
      <section className="hero-section h-screen px-6 lg:px-36 py-40 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="hero-item-1">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <p className="mt-2 text-base lg:text-lg leading-6 lg:leading-8 text-gray-600">
                Welcome to
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ecommerce {heading}
              </h2>
              <p className="mt-5 text-sm lg:text-base leading-6 lg:leading-7 text-gray-600">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat consectetur nulla deserunt vel. Iusto
                corrupti dicta.
              </p>
              <NavLink to="/Products">
                <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="hero-item-2 p-10">
            <div className="mx-auto max-w-md lg:max-w-none relative">
              <div className="absolute right-0 w-36 h-36 lg:w-64 lg:h-64 bg-cyan-800 opacity-30 z-0 top-0"></div>
              <img
                src={hero}
                alt=""
                className="w-80 h-100 right-10 z-10 top-8 absolute hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div class="bg-white pt-24 sm:py-32">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between px-40 lg:px-40">
            <div class="max-w-7xl ">
              <div class="mx-auto max-w-2xl lg:mx-0">
                <p class="mt-2 text-lg leading-8 text-gray-600">Welcome to</p>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ecommerce Store
                </h2>
              </div>
            </div>
            <div class="mx-auto max-w-7xl">
              <div class="flex max-w-xl flex-col items-start justify-between">
                <div class="group relative">
                  <p class="mt-5 text-sm leading-6 text-gray-600">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;
