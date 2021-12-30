import { actionTypes } from "../constants/actionTypes";
const initialState = {
  user: {},
  isAuthenticated: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload, isAuthenticated: true };
    case actionTypes.UNSET_USER:
      return { ...state, user: payload, isAuthenticated: false };
    default:
      return state;
  }
};
