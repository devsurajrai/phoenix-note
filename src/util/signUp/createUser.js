import { signUpUser } from "../../backendUtil/backendUtil";
export const createUser = (
  e,
  signUpLoginValidationState,
  authDispatch,
  auth,
  navigate
) => {
  e.preventDefault();
  signUpUser(signUpLoginValidationState, authDispatch, auth);
  navigate("/home");
};
