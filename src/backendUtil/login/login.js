import axios from "axios";
import { setAuthState } from "../../util/setAuthState/setAuthState";

export const login = (signUpLoginValidationState, authDispatch, auth) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    try {
      const loginResponse = await axios.post("/api/auth/login", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(loginResponse);
      // setting the auth to context and the local storage
      const userToken = loginResponse.data.encodedToken;
      setAuthState(authDispatch, auth, userToken);
    } catch (error) {
      console.log("error logging in", error);
    }
  })();
};
