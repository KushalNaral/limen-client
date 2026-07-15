import { createAuthClient } from "limen-auth";
import { credentialPasswordPlugin } from "limen-auth/plugins/credential";

export const auth = createAuthClient({
  baseURL: import.meta.env.VITE_LIMEN_AUTH_ORIGIN ?? "http://localhost:8080",
  basePath: import.meta.env.VITE_LIMEN_AUTH_BASE_PATH ?? "api/v1/auth",
  plugins: [credentialPasswordPlugin()],
  fetchOptions: {
    credentials: "include",
  },
});
