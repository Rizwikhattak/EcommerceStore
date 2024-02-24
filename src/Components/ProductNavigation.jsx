import React from "react";
import { NavLink } from "react-router-dom";

const ProductNavigation = ({ title }) => {
  return (
    <>
      <h1 className="text-2xl">
        <NavLink to="/">Home</NavLink>/{title}
      </h1>
    </>
  );
};

export default ProductNavigation;
