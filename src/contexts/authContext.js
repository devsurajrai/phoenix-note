import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorageData?.userToken;
  const isLoggedIn = token ? true : false;
  const userData = localStorageData?.userData;

  const [auth, setAuth] = useState({
    isLoggedIn,
    token,
    userData,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
