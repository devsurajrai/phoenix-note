import { login } from "../../backendUtil/backendUtil";
import { useNavigate } from "react-router-dom";
export const loginUser = (e, signUpLoginValidationState, setAuth) => {
  e.preventDefault();
  login(signUpLoginValidationState, setAuth);
};
