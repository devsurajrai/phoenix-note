import { login } from "../../backendUtil/backendUtil";
export const loginUser = (e, signUpLoginValidationState, setAuth) => {
  e.preventDefault();
  login(signUpLoginValidationState, setAuth);
  console.log(" user logged in ");
};
