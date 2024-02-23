import React from "react";

import { useProduct } from "../Context/ProductContext";
import Product from "./Product";
import { NavLink } from "react-router-dom";
const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProduct();

  if (isLoading) return <div>...LOADING</div>;

  return (
    <section className="px-6 lg:px-36 py-10 bg-slate-50">
      <div className="headings">
        <p className="text-sky-400">Check Now!</p>
        <h1 className=" text-2xl font-bold">Our Featured Services</h1>
      </div>
      <div className="grid grid-cols-3 lg:gap-10 gap-5">
        {featureProducts.map((currElem) => {
          return <Product key={currElem.id} {...currElem} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
