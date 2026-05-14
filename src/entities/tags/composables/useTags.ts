import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { tags } from "../api/tags.api";

export const useTags = (): UseQueryResult<string[]> => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => tags(),
  });
};
