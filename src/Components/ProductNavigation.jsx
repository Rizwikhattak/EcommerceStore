import React from "react";
import { NavLink } from "react-router-dom";

const ProductNavigation = ({ title }) => {
  return (
    <>
      <h1 className=" px-10 text-2xl bg-slate-50 w-full">
        <NavLink to="/" className="text-sky-400">
          Home
        </NavLink>
        /{title}
      </h1>
    </>
  );
};

export default ProductNavigation;
