import { useReducer } from "react";

export const useAuthState = () => {
  const INITIAL_AUTH_STATE = {
    isLoggedIn: false,
    notes: [],
    archives: [],
    userInfo: {},
  };

  const authReducer = (authState, action) => {
    const value = action.payload.value;
    switch (action.type) {
      case "SET_IS_LOGGED_IN":
        return { ...authState, isLoggedIn: value };
      case "SET_NOTES":
        return { ...authState, notes: value };
      case "SET_ARCHIVES":
        return { ...authState, archives: value };
      case "SET_USER_INFO":
        return { ...authState, userInfo: value };
      default:
        return authState;
    }
  };

  const [auth, authDispatch] = useReducer(authReducer, INITIAL_AUTH_STATE);
  console.log(auth);
  return { auth, authDispatch };
};
