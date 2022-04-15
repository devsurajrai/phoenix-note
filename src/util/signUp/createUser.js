import { signUpUser } from "../../backendUtil/backendUtil";
export const createUser = (
  e,
  signUpLoginValidationState,
  setAuth,
  navigate
) => {
  e.preventDefault();
  signUpUser(signUpLoginValidationState, setAuth);
  navigate("/home");
};
