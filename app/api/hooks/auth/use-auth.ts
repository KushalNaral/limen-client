import { useNavigate } from "react-router";
import { keys, useProfile } from "@/api/hooks/auth/index";
import type { Session, User } from "limen-auth";
import { queryClient } from "@/api/query-client/provider";

export function useAuth() {
  const navigate = useNavigate();

  const profileQuery = useProfile();
  const user = profileQuery?.data as User | undefined;
  const isLoading = profileQuery?.isPending;

  const isAuthenticated = !!user;
  const isEmailVerified = !!user?.emailVerifiedAt;

  const refreshProfile = () => profileQuery.refetch();

  return {
    user,
    isProfileLoading: isLoading,
    isAuthenticated,
    isEmailVerified,
    refreshProfile,
    onAuthSuccess: (session: Session) => {
      queryClient.setQueryData(keys.profile, session.user || undefined);
      navigate("/dashboard");
    },
  };
}
