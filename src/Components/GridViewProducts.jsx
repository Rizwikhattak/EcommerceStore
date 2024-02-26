import React from "react";
import Product from "./Product";

const GridViewProducts = ({ products }) => {
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        {products.map((product) => {
          return <Product {...product} />;
        })}
      </div>
    </>
  );
};

export default GridViewProducts;
