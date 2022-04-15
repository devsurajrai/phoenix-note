const signUpUser = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
    console.log("account created and data saved to local storage", response);
  } catch (error) {
    console.log("error creatin account", error);
  }
};
export { signUpUser };
