import { login } from "../../backendUtil/backendUtil";

export const loginUser = (
  e,
  signUpLoginValidationState,
  location,
  navigate,
  setAuth
) => {
  e.preventDefault();
  login(signUpLoginValidationState, setAuth);
  //navigating to landing page if the user has not redirected to login page from some other page he wanted to visit else navigate back to the page he might be coming
  navigate(location?.state?.from || "/", { replace: true });
};
