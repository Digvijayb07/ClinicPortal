import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("therapist_logged_in");

  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
