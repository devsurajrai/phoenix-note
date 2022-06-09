export const logout = (navigate, dispatchAuth, ) => {
    localStorage.clear("token");
    dispatchAuth({type:"SET_TO_DEFAULT",payload:{value:""}})
    navigate("/");
  };