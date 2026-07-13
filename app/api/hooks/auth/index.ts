import { auth, type LoginInput, type SignUpInputData } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";

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
  return useMutation({
    mutationFn: (data: LoginInput) => auth.signIn.credential(data),
    onSuccess: (session) => {
      console.log(session);
      toast.success("Logged in successfully.");
    },
    onError: (err) => {
      console.error(err);
      toast.warning("error regarding user login: " + err.message);
    },
  });
};
