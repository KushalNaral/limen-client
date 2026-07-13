import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { baseAPI } from "@/api/endpoints/base";
import type { BaseAPIResponse, HealthResponse } from "@/api/types";

export const keys = {
  base: ["base"],
  health: ["health"],
};

export const useHealth = (): UseQueryResult<HealthResponse, Error> => {
  return useQuery({
    queryKey: keys.health,
    queryFn: ({ signal }) => baseAPI.health(signal),
  });
};

export const useBase = (): UseQueryResult<BaseAPIResponse, Error> => {
  return useQuery({
    queryKey: keys.base,
    queryFn: ({ signal }) => baseAPI.base(signal),
  });
};
