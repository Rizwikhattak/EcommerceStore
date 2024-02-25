import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterProducts } from "../Context/FilterProductContext";
const Sort = () => {
  const { grid_view, setGridView, setListView } = useFilterProducts();
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
      <div>Product available</div>
      <div>drop down</div>
    </div>
  );
};

export default Sort;
