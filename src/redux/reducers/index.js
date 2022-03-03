import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

export const reducer = combineReducers({
  productsData: ProductReducer,
});
