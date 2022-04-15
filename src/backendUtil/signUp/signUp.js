import axios from "axios";

export const signUpUser = (signUpLoginValidationState, setAuth) => {
  const { firstName, lastName, email, password } = signUpLoginValidationState;
  (async () => {
    try {
      const signUpResponse = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      // saving the userInfo in local storage for session persistance
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userToken: signUpResponse.data.encodedToken,
          userInfo: signUpResponse.data.createdUser,
        })
      );
    } catch (error) {
      console.log("error creating the account", error);
    }
  })();
};
