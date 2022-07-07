import { ProductsReducer } from "./ProductReducers";
import { combineReducers } from "redux";
export default combineReducers({
  products: ProductsReducer,
});
