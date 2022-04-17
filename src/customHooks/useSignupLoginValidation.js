import { useReducer } from "react";

const useSignupLoginValidation = () => {
  const SIGNUP_LOGIN_FORM_VALIDATION_INITIAL = {
    firstName: "",
    lastName: "",
    email: "devsurajrai@gmail.com",
    password: "123",
    isPassHidden: true,
    isTermsCondChecked: false,
  };
  const signUpValidationReducer = (
    signUpLoginValidationState,
    signUpValidationAction
  ) => {
    const inputValue = signUpValidationAction.payload.value;
    switch (signUpValidationAction.type) {
      case "SET_FIRST_NAME":
        return { ...signUpLoginValidationState, firstName: inputValue };
      case "SET_LAST_NAME":
        return { ...signUpLoginValidationState, lastName: inputValue };
      case "SET_EMAIL":
        return { ...signUpLoginValidationState, email: inputValue };
      case "SET_PASSWORD":
        return { ...signUpLoginValidationState, password: inputValue };
      case "SET_TC":
        return {
          ...signUpLoginValidationState,
          isTermsCondChecked: inputValue,
        };
      case "SET_HIDE_PASS":
        return { ...signUpLoginValidationState, isPassHidden: inputValue };
      default:
        return signUpLoginValidationState;
    }
  };

  const [signUpLoginValidationState, signUpLoginValidationDispatch] =
    useReducer(signUpValidationReducer, SIGNUP_LOGIN_FORM_VALIDATION_INITIAL);

  return { signUpLoginValidationState, signUpLoginValidationDispatch };
};

export { useSignupLoginValidation };
