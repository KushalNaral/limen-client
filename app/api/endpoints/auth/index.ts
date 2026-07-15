import { apiClient } from "@/api/instance";
import type { ProfileResponse } from "@/api/types";

export const authAPI = {
  profile: (signal?: AbortSignal) =>
    apiClient.get<ProfileResponse>("/v1/auth/me", signal),
};
