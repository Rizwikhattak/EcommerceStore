import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../Reducers/ProductReducer";
const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  async function getProducts(url) {
    dispatch({ type: "Loading" });
    try {
      const res = await axios.get(url);
      const Products = await res.data;
      dispatch({ type: "set_products", payload: Products });
    } catch (error) {
      dispatch({ type: "product_error" });
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <>
      {console.log("STATEEEEEEEEEEEE:", state)}
      <ProductContext.Provider value={state}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

//Custom Hooks

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProduct };
