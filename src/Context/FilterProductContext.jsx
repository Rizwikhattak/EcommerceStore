import { createContext, useContext, useReducer, useEffect } from "react";
import { useProduct } from "./ProductContext";
import reducer from "../Reducers/FilterProductReducer";
const FilterProductContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: false,
};

export const FilterProductProvider = ({ children }) => {
  const { products } = useProduct();
  const [state, dispatch] = useReducer(reducer, initialState);

  function setGridView() {
    dispatch({ type: "set_grid_view" });
  }
  function setListView() {
    dispatch({ type: "set_list_view" });
  }

  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{ ...state, setGridView, setListView }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

//Custom Hooks

export const useFilterProducts = () => {
  return useContext(FilterProductContext);
};
