import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminProtectedRoute({ children }) {
  const values = useAuth();
  const { user } = values;

  // const isAdmin = user ? user.isAdmin : false;
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
}
