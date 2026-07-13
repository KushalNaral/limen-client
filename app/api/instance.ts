import { ApiClient } from "@/api/client";

export const apiClient = new ApiClient(import.meta.env.VITE_API_URL, () =>
  localStorage.getItem("auth_token"),
);
