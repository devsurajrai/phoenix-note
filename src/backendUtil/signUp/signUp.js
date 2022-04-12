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
      // setting the auth state at the time of account creation
      setAuth({
        isLoggedIn: true,
        token: signUpResponse.data.encodedToken,
        userData: signUpResponse.data.createdUser,
      });
      // saving the userInfo in local storage for later use
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
