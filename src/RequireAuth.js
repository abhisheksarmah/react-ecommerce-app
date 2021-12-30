import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children, redirectTo }) {
  const isAuthenticated = useSelector(
    (state) => state.userDetails.isAuthenticated
  );
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
