import { actionTypes } from "../constants/actionTypes";
const initialState = {
  user: {},
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
