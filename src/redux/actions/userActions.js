import { actionTypes } from "../constants/actionTypes";
import ecommerceApi from "../../api/ecommerceApi";

export const registerUser = (requestData) => async (dispatch) => {
  const response = await ecommerceApi
    .post("/users", requestData)
    .catch((err) => console.log("Err" + err));
  dispatch(loginUser(response.data));
};

export const loginUser = (requestData) => (dispatch) => {
  dispatch(setUser(requestData));
};

export const setUser = (userData) => {
  return { type: actionTypes.SET_USER, payload: userData };
};
