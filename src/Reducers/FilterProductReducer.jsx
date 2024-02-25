const FilterProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    case "set_grid_view":
      return {
        ...state,
        grid_view: true,
      };
    case "set_list_view":
      return {
        ...state,
        grid_view: false,
      };
    default:
      return state;
  }
};

export default FilterProductReducer;
