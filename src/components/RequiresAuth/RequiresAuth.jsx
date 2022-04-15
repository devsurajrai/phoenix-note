import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

const RequiresAuth = ({ children }) => {
  const { auth, test } = useAuthContext();
  const location = useLocation();
  console.log(location);
  console.log(auth);
  console.log(location.pathname);

  return auth.isLoggedIn || test ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export { RequiresAuth };
