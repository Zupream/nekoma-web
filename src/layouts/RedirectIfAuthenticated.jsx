import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function RedirectIfAuthenticated({ children }) {
  const values = useAuth();

  const { user } = values;

  const isAuthenticated = user ? true : false;

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}
