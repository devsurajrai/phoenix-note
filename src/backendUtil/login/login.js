import axios from "axios";
import { setAuthState } from "../../util/setAuthState/setAuthState";

export const login = (signUpLoginValidationState, setAuth) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    try {
      const loginResponse = await axios.post("/api/auth/login", {
        firstName,
        lastName,
        email,
        password,
      });
      // setting the auth to context and the local storage
      let userToken = loginResponse.data.encodedToken;
      let userData = loginResponse.data.foundUser;
      setAuthState(setAuth, userToken, userData);
    } catch (error) {
      console.log("error logging in", error);
    }
  })();
};
