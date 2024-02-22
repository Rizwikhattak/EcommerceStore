import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const ProductProvider = ({ children }) => {
  async function getProducts(url) {
    try {
      const res = await axios.get(url);
      const Products = await res.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <ProductContext.Provider value="Rizwi k">
      {children}
    </ProductContext.Provider>
  );
};

//Custom Hooks

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProduct };
