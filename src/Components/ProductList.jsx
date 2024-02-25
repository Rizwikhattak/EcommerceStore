import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import Product from "./Product";
import ListViewProducts from "./ListViewProducts";
import GridViewProducts from "./GridViewProducts";

import { useFilterProducts } from "../Context/FilterProductContext";

const ProductList = () => {
  const { filterProducts, grid_view } = useFilterProducts();

  if (grid_view === true) return <GridViewProducts products={filterProducts} />;

  if (grid_view === false)
    return <ListViewProducts products={filterProducts} />;
};

export default ProductList;
