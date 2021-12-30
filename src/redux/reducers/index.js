import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";
const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  userDetails: userReducer,
});

export default reducer;
