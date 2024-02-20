import React from "react";
import {
  Gi3DMeeple,
  Gi3DStairs,
  GiAbbotMeeple,
  GiAbstract027,
  GiAbstract004,
} from "react-icons/gi";

const Companies = () => {
  return (
    <>
      <section className="companies px-36 py-14 mt-28 bg-slate-50">
        <h1 className="text-center text-xl mb-10">
          Trusted by 1000+ Companies
        </h1>
        <div class="flex flex-wrap justify-center lg:justify-between gap-14 items-center w-full">
          <div className="comapny-1">
            <Gi3DMeeple className="h-10 w-10" />
          </div>
          <div className="comapny-2">
            <Gi3DStairs className="h-10 w-10" />
          </div>
          <div className="comapny-3">
            <GiAbbotMeeple className="h-10 w-10" />
          </div>
          <div className="comapny-4">
            <GiAbstract004 className="h-10 w-10" />
          </div>
          <div className="comapny-5">
            <GiAbstract027 className="h-10 w-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
