import { z } from "zod";

export const loginSchema = z.object({
  credential: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
  firstname: z.string().min(1, "First Name is required"),
  lastname: z.string().min(1, "Last Name is required"),
  email: z.string().email(),
  password: z.string().min(8),
});

export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Token is required"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type VerifyEmailDataInput = z.infer<typeof verifyEmailSchema>;
