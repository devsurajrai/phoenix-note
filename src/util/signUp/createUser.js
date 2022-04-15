import { signUpUser } from "../../backendUtil/backendUtil";
export const createUser = (e, signUpLoginValidationState) => {
  e.preventDefault();
  signUpUser(signUpLoginValidationState);
  console.log("userCreated");
};
