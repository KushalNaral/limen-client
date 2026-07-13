import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { baseAPI } from "@/api/endpoints/base";
import type { BaseAPIResponse } from "@/api/types";

export const keys = {
  base: ["base"],
  health: ["health"],
};

export const useHealth = () => {};

export const useBase = (): UseQueryResult<BaseAPIResponse, Error> => {
  return useQuery({
    queryKey: keys.base,
    queryFn: ({ signal }) => baseAPI.base(signal),
  });
};
