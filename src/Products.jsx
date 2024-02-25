import React from "react";
import Filters from "./Components/Filters";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";
import { useFilterProducts } from "./Context/FilterProductContext";

const Products = () => {
  const { filterProducts } = useFilterProducts();

  console.log("Filter", filterProducts);

  return (
    <>
      <section className="products px-52 py-40 grid grid-cols-4 gap-5">
        <div className="filter-srction col-span-1">
          <Filters />
        </div>
        <div className="content-section col-span-3  space-y-10">
          <div className="sorts">
            <Sort />
          </div>
          <div className="product-list">
            <ProductList products={filterProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
