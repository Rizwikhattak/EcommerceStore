export const productReducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "set_products":
      const featureProducts = action.payload.filter((currElem) => {
        return currElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featureProducts,
      };
    case "product_error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "single_loading":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSingleLoading: true,
      };
    case "set_single_product":
      console.log("set_single_product");
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "single_product_error":
      console.log("Error");
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
