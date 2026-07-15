import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { User } from "limen-auth";
import { auth } from "@/lib/auth";

interface AuthContextValue {
  user: User | undefined;
  isProfileLoading: boolean;
  isAuthenticated: boolean;
  isEmailVerified: boolean;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const sessionState = useSyncExternalStore(
    auth.$session.subscribe,
    auth.$session.get,
    auth.$session.get,
  );
  const user = sessionState.data?.user as User | undefined;

  return (
    <AuthContext.Provider
      value={{
        user,
        isProfileLoading: sessionState.isPending,
        isAuthenticated: !!user,
        isEmailVerified: !!user?.emailVerifiedAt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}


