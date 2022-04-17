import axios from "axios";
import { setAuthState } from "../../util/setAuthState/setAuthState";
export const signUpUser = (signUpLoginValidationState, authDispatch, auth) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    try {
      const signUpResponse = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      // setting the auth to context and the local storage
      let userToken = signUpResponse.data.encodedToken;

      setAuthState(authDispatch, auth, userToken);
    } catch (error) {
      console.log("error creating the account", error);
    }
  })();
};
