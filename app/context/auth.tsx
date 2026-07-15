import { createContext, type ReactNode } from "react";
import type { User } from "limen-auth";
import { keys, useProfile } from "@/api/hooks/auth";
import { queryClient } from "@/api/query-client/provider";

const AuthContext = createContext<User>({} as User);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data, isPending, isError } = useProfile();

  const loginSuccess = (newUser: User) => {
    queryClient.setQueryData(keys.profile, newUser);
  };

  return (
    <>
      <div></div>
    </>
  );
}
