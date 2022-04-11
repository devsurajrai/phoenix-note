import axios from "axios";

export const login = (signUpLoginValidationState) => {
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
      localStorage.setItem("userToken", loginResponse.data.encodedToken);
    } catch (error) {
      console.log("error logging in", error);
    }
  })();
};
