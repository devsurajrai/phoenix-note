import { useState, useEffect } from "react";
import { useSignUpLoginValidateContext } from "../contexts/signUpLoginValidationContext";

export const useShowPassword = () => {
  const { signUpLoginValidationState, signUpLoginValidationDispatch } =
    useSignUpLoginValidateContext();
  const [passInputType, setPassInputType] = useState("password");

  useEffect(() => {
    signUpLoginValidationState.isPassHidden === false &&
      setPassInputType("text");
  }, [signUpLoginValidationState]);

  useEffect(() => {
    passInputType === "text" &&
      setTimeout(() => {
        setPassInputType("password");
        signUpLoginValidationDispatch({
          type: "SET_HIDE_PASS",
          payload: { value: !signUpLoginValidationState.isPassHidden },
        });
      }, 1000);
  }, [passInputType]);
  return passInputType;
};
