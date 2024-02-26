import React from "react";
import { useFilterProducts } from "../Context/FilterProductContext";

const Filters = () => {
  const { SearchFilter } = useFilterProducts();
  return (
    <section>
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" onChange={SearchFilter} />
        </form>
      </div>
    </section>
  );
};

export default Filters;
