import { useSyncExternalStore } from "react";
import { useNavigate } from "react-router";
import type { Session, User } from "@/lib/auth";
import { auth } from "@/lib/auth";

export function useAuth() {
  const navigate = useNavigate();

  // Subscribe to limen's $session atom via React's built-in useSyncExternalStore.
  // Nanostores atoms expose .subscribe() and .get() which match the exact interface
  // useSyncExternalStore expects — no adapter library needed.
  const sessionState = useSyncExternalStore(
    auth.$session.subscribe,
    auth.$session.get,
    auth.$session.get,
  );

  const user = sessionState.data?.user as User | undefined;
  const isLoading = sessionState.isPending;

  const isAuthenticated = !!user;
  const isEmailVerified = !!user?.emailVerifiedAt;

  const refreshProfile = () => auth.getSession();

  return {
    user,
    isProfileLoading: isLoading,
    isAuthenticated,
    isEmailVerified,
    refreshProfile,
    onAuthSuccess: (_session: Session) => {
      // limen's signIn already called store.setData() internally,
      // so $session is already up to date. Just navigate.
      navigate("/dashboard");
    },
  };
}
