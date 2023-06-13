import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function ProtectedRoute({ children }) {
  const values = useAuth();

  const { user } = values;

  const isAuthenticated = user ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
