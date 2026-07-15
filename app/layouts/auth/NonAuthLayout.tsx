import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/api/hooks/auth/use-auth";

export default function Layout() {
  const { isAuthenticated, isEmailVerified, isProfileLoading } = useAuth();

  if (isProfileLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isAuthenticated && isEmailVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isAuthenticated && !isEmailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return <Outlet />;
}
