import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "../customHooks/customHooks";
import { setAuthState } from "../util/setAuthState/setAuthState";

const AuthContext = createContext({});

const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");
  const { auth, authDispatch } = useAuthState();
  useEffect(() => {
    userToken && setAuthState(authDispatch, auth, userToken);
  }, []);
  console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, authDispatch, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
