import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const RequiresAuth = ({ children }) => {
  const { auth } = useAuthContext();
  const location = useLocation();
  return auth.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export { RequiresAuth };
