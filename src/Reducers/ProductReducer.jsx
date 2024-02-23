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

    default:
      return state;
  }
};
