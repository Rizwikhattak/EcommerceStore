import React from "react";

const HeroSection = () => {
  return (
    <>
      <div class="bg-white pt-24 px-40 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <p class="mt-2 text-lg leading-8 text-gray-600">Welcome to</p>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ecommerce Store
            </h2>
          </div>
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="group relative">
                <p class="mt-5 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
