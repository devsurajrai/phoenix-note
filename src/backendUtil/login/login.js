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
      // setting the auth state when logging in
      setAuth({
        isLoggedIn: true,
        token: loginResponse.data.encodedToken,
        userData: loginResponse.data.foundUser,
      });
      // saving the logged in user data for user referance
      localStorage.setItem(
        JSON.stringify("userData", {
          userToken: loginResponse.data.encodedToken,
          userInfo: loginResponse.data.foundUser,
        })
      );
      localStorage.setItem("userToken");
      localStorage.setItem("userData");
    } catch (error) {
      console.log("error logging in", error);
    }
  })();
};
