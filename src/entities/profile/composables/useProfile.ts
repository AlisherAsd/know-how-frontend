import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { ProfileResponse } from "../types/profile.types";
import { profile } from "../api/profile.api";

export const useProfile = (): UseQueryResult<ProfileResponse> => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => profile(),
  });
};
