import axios from "axios";

export const signUpUser = (signUpLoginValidationState) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    const signUpResponse = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(signUpResponse.data.encodedToken);
    localStorage.setItem("userToken", signUpResponse.data.encodedToken);
  })();
};
