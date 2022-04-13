import axios from "axios";

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

      // saving the logged in user data in local storage for session persistance
      localStorage.setItem(
        JSON.stringify("userData", {
          userToken: loginResponse.data.encodedToken,
          userInfo: loginResponse.data.foundUser,
        })
      );
    } catch (error) {
      console.log("error logging in", error);
    }
  })();
};
