export const setAuthState = (setAuth, userToken, userData) => {
  // /setting the auth user state
  setAuth({
    isLoggedIn: true,
    userToken,
    userData,
  });
  // saving the logged in user data for session persistance
  localStorage.setItem("userData", JSON.stringify({ userToken, userData }));
};
