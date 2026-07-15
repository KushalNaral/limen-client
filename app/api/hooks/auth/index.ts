import { auth, type LoginInput, type SignUpInputData } from "@/lib/auth";
import {
  useMutation,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { authAPI } from "@/api/endpoints/auth";
import { useAuth } from "@/api/hooks/auth/use-auth";

export const keys = {
  profile: ["me"],
};

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SignUpInputData) => auth.signUp.credential(data),
    onSuccess: (session) => {
      console.log(session);
      toast.success("New registration has been created.");
      navigate("/login", {
        state: {
          email: session.user.email,
        },
      });
    },
    onError: (err) => {
      console.error(err);
      toast.warning("error regarding register credentials. " + err.message);
    },
  });
};

export const useLogin = () => {
  const { onAuthSuccess } = useAuth();

  return useMutation({
    mutationFn: (data: LoginInput) => auth.signIn.credential(data),
    onSuccess: (session) => {
      onAuthSuccess(session);
      toast.success("Logged in successfully.");
    },
    onError: (err) => {
      console.error(err);
      toast.warning("error regarding user login: " + err.message);
    },
  });
};

export const useProfile = (): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: keys.profile,
    queryFn: ({ signal }) => authAPI.profile(signal),
  });
};
