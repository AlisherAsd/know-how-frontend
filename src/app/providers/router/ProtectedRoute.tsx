import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthData } from "@/feature/auth/authSelectors";
import { ROUTES } from "./config";

export const ProtectedRoute = () => {
  const { isAuth, isLoading } = useSelector(selectAuthData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to={ROUTES.AUTH} replace />;
  }

  return <Outlet />;
};
