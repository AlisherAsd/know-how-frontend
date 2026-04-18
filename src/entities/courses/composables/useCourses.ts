import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { CoursesResponseItem } from "../types/courses.types";
import { courses } from "../api/courses.api";

export const useCourses = (): UseQueryResult<CoursesResponseItem[]> => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => courses(),
  });
};
