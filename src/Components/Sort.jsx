import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterProducts } from "../Context/FilterProductContext";
const Sort = () => {
  const { filterProducts, grid_view, setGridView, setListView, sortProducts } =
    useFilterProducts();
  return (
    <div className="flex justify-between">
      <div className="space-x-2">
        <button
          className={`p-2 ${grid_view ? "bg-black" : "bg-slate-50"}`}
          onClick={setGridView}
        >
          <BsFillGridFill
            className={` ${grid_view ? "text-white" : "text-black"}`}
          />
        </button>
        <button
          className={`p-2 ${!grid_view ? "bg-black" : "bg-slate-50"}`}
          onClick={setListView}
        >
          <BsList className={`${!grid_view ? "text-white" : "text-black"}`} />
        </button>
      </div>
      <div>{filterProducts.length} Product available</div>
      <div>
        <select
          id="mySelect"
          className="bg-slate-50 p-2"
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="Default">Default</option>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(Highest)</option>
          <option value="asc">Price(a-z)</option>
          <option value="dsc">Price(z-a)</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
