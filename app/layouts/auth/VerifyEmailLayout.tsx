import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/api/hooks/auth/use-auth";

/**
 * Guard layout for the /verify-email route.
 * Requires: authenticated, but email NOT yet verified.
 * - Unauthenticated users → /login
 * - Already verified users → /dashboard
 */
export default function VerifyEmailLayout() {
  const { isAuthenticated, isEmailVerified, isProfileLoading } = useAuth();

  if (isProfileLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isEmailVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
