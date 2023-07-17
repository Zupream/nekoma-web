import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAccessToken } from "../utils/localstorage";

export default function AdminProtectedRoute({ children }) {
  const values = useAuth();
  const { user } = values;

  const isAdmin = user ? user.isAdmin : false;
  // const isAdmin = true;

  if (!isAdmin && !getAccessToken()) {
    return <Navigate to="/" />;
  }
  return children;
}
