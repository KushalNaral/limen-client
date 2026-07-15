import { auth, type LoginInput, type SignUpInputData } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuth } from "@/api/hooks/auth/use-auth";
import type { VerifyEmailDataInput } from "@/lib/auth";

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: SignUpInputData) => auth.signUp.credential(data),
    onSuccess: (session) => {
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

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: () => auth.requestEmailVerification(),
    onSuccess: () => {
      toast.success("Email Verification sent successfully");
    },
    onError: (err) => {
      console.error(err);
      toast.warning("error sending verification email: " + err.message);
    },
  });
};

export const useVerifyEmailToken = () => {
  const { refreshProfile } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: VerifyEmailDataInput) => auth.verifyEmail({ token: data.token }),
    onSuccess: async () => {
      await refreshProfile();
      toast.success("Email successfully verified.");
      navigate("/dashboard");
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to verify email. Invalid or expired token.");
    },
  });
};
