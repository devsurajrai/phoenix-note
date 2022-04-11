import axios from "axios";

export const signUpUser = (signUpLoginValidationState) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    try {
      const signUpResponse = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      localStorage.setItem("userToken", signUpResponse.data.encodedToken);
    } catch (error) {
      console.log("error creating the account", error);
    }
  })();
};
