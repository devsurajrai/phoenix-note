import { getNotes, getArchives, getUser } from "../../backendUtil/backendUtil";
export const setAuthState = (authDispatch, auth, userToken) => {
  //setting the auth user state
  const notes = getNotes(userToken);
  const archives = getArchives(userToken);
  const user = getUser(userToken);
  // console.log(user);

  Promise.all([notes, archives, user]).then((res) => {
    const user = res[2].data.foundUser;
    const notes = res[0];
    const archives = res[1];
    const userInfo = {
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      _id: user._id,
    };
    authDispatch({
      type: "SET_NOTES",
      payload: { value: notes },
    });
    authDispatch({
      type: "SET_ARCHIVES",
      payload: { value: archives },
    });
    authDispatch({
      type: "SET_USER_INFO",
      payload: { value: userInfo },
    });
  });
  authDispatch({
    type: "SET_IS_LOGGED_IN",
    payload: { value: !auth.isLoggedIn },
  });

  // saving the logged in user data for session persistance
  localStorage.setItem("token", userToken);
};
