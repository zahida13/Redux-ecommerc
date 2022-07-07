const initialState = {
  products: [],
  addProducts: [],
  searchItem: [],
  purchaseItems: [],
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-ITEM": {
      const data = [...state.addProducts, action.payload];
      return { ...state, addProducts: data };
    }
    case "FETCH-DATA": {
      return { ...state, products: action.payload };
    }
    case "DELETE-ITEM": {
      const updatedAddProducts = state.addProducts.filter(
        (product) => product.product.id !== action.payload
      );

      return { ...state, addProducts: updatedAddProducts };
    }
    case "SEARCH-ITEM": {
      const data = action.payload;
      return { ...state, searchItem: data };
    }
    case "DELETE-PURCHASE-ITEM": {
      const updatedAddProducts = state.purchaseItems.filter(
        (product) => product.id !== action.payload
      );

      return { ...state, purchaseItems: updatedAddProducts };
    }
    case "PURCHASE-ITEM": {
      const data = action.payload;
      console.log(action.payload);
      return { ...state, purchaseItems: data };
    }
    default:
      return state;
  }
};
