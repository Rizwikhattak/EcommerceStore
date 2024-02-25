import React from "react";
import Filters from "./Components/Filters";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";

const Products = () => {
  return (
    <>
      <section className="products">
        <div className="filter-srction">
          <Filters />
        </div>
        <div className="content-section">
          <div className="sorts">
            <Sort />
          </div>
          <div className="product-list">
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
