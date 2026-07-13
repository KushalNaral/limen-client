export interface SignUpInputData {
  email: string; // required
  password: string; // required
  firstname: string;
  lastname: string;
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
  emailVerifiedAt: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
};

export type Session = {
  user: User;
};
