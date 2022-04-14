import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const PublicRoute = ({ children }) => {
  const { auth } = useAuthContext();
  return !auth.isLoggedIn ? children : <Navigate to="/home" />;
};

export { PublicRoute };
