import {LOGIN_SUCCESS, LOGOUT_SUCCESS, VOTED, ERROR} from "./AuthType.js";

const initalState = {
  loaded: false,
  user: null,
  voted: false,
  error: false,
  error_msg: null,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,

        loaded: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loaded: false,
        user: null,
      };
    case VOTED:
      return {
        ...state,
        voted: true,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        error_msg: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
