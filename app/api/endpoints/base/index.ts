import { apiClient } from "@/api/instance";
import type { BaseAPIResponse, HealthResponse } from "@/api/types";

export const baseAPI = {
  base: (signal?: AbortSignal) => apiClient.get<BaseAPIResponse>("", signal),
  health: (signal?: AbortSignal) =>
    apiClient.get<HealthResponse>("/health", signal),
};
