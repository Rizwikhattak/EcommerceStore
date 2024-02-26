import { createContext, useContext, useReducer, useEffect } from "react";
import { useProduct } from "./ProductContext";
import reducer from "../Reducers/FilterProductReducer";
const FilterProductContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: false,
  filter: {
    text: "",
  },
};

export const FilterProductProvider = ({ children }) => {
  const { products } = useProduct();
  console.log("Prode :", products);
  const [state, dispatch] = useReducer(reducer, initialState);

  function setGridView() {
    dispatch({ type: "set_grid_view" });
  }
  function setListView() {
    dispatch({ type: "set_list_view" });
  }

  function sortProducts(value) {
    const copyProds = [...products];
    switch (value) {
      case "Default":
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
        break;
      case "lowest":
        copyProds.sort((a, b) => {
          return a.price - b.price;
        });
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: copyProds });
        break;
      case "highest":
        copyProds.sort((a, b) => {
          return b.price - a.price;
        });
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: copyProds });
        break;
      case "asc":
        copyProds.sort((a, b) => a.name.localeCompare(b.name));
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: copyProds });
        break;
      case "dsc":
        copyProds.sort((a, b) => b.name.localeCompare(a.name));
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: copyProds });
        break;
      default:
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
    }
  }

  function SearchFilter(e) {
    console.log(e.target.value);
  }

  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider
      value={{ ...state, setGridView, setListView, sortProducts, SearchFilter }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

//Custom Hooks

export const useFilterProducts = () => {
  return useContext(FilterProductContext);
};
