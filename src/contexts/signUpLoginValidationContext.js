import { createContext, useContext } from "react";
import { useSignupLoginValidation } from "../customHooks/customHooks";

const SignUpLoginValidateContext = createContext({});

const useSignUpLoginValidateContext = () =>
  useContext(SignUpLoginValidateContext);

const SignUpLoginValidateContextProvider = ({ children }) => {
  const { signUpLoginValidationState, signUpLoginValidationDispatch } =
    useSignupLoginValidation();

  return (
    <SignUpLoginValidateContext.Provider
      value={{ signUpLoginValidationState, signUpLoginValidationDispatch }}
    >
      {children}
    </SignUpLoginValidateContext.Provider>
  );
};

export { SignUpLoginValidateContextProvider, useSignUpLoginValidateContext };
