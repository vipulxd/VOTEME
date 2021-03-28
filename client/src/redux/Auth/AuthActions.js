import {LOGIN_SUCCESS, LOGOUT_SUCCESS, VOTED, ERROR} from "./AuthType";

export const login = (text = null) => {
  return {
    type: LOGIN_SUCCESS,
    payload: text,
  };
};
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
export const voted = () => {
  return {
    type: VOTED,
  };
};
export const error = (text = null) => {
  return {
    type: ERROR,
    payload: text,
  };
};
