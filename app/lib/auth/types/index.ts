export interface SignUpInputData {
  email: string; // required
  password: string; // required
  firstname: string;
  lastname: string;
}

export interface VerifyEmailData {
  email: string;
  token: string;
}

export interface CreatedUser {
  createdAt: string;
  email: string;
  emailVerified: boolean | null;
  firstname: string | null;
  lastname: string | null;
  updatedAt: string;
}

export type User = {
  id: string;
  email: string;
  emailVerifiedAt: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
};

export type Session = {
  user: User;
};
