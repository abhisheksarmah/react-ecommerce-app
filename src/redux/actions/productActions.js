import { actionTypes } from "../constants/actionTypes";
import ecommerceApi from "../../api/ecommerceApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await ecommerceApi
    .get("/products")
    .catch((err) => console.log("Err" + err));
  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await ecommerceApi
    .get(`/products/${id}`)
    .catch((err) => console.log("Err" + err));
  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
