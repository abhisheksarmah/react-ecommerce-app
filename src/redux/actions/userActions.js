import { actionTypes } from "../constants/actionTypes";
import ecommerceApi from "../../api/ecommerceApi";

export const registerUser = (requestData) => async (dispatch) => {
  const response = await ecommerceApi
    .post("/users", requestData)
    .catch((err) => console.log("Err" + err));
  dispatch(setUser(response.data));
};

export const setUser = (user) => {
  return { type: actionTypes.SET_USER, payload: user };
};
