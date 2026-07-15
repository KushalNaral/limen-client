import Header from "@/components/utils/ui/header";
import Footer from "@/components/utils/ui/footer";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/api/hooks/auth/use-auth";

export default function Layout() {
  const { user, isAuthenticated, isEmailVerified, isProfileLoading } =
    useAuth();

  if (isProfileLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log("not ath");
    return <Navigate to="/login"></Navigate>;
  }

  if (!isEmailVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  console.log("here");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
