import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("userToken");
  const isLoggedIn = token ? true : false;
  const [auth, setAuth] = useState({
    isLoggedIn: isLoggedIn,
    token: token,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
