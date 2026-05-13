import { ROUTES } from "../config/courses.config";
import type { CoursesCreateData } from "../types/courses.types";
import { api } from "@/shared/api/client";

export const courses = async () => {
  return api.get(ROUTES.COURSES).then((res) => res.data);
};

export const coursesCreate = async (data: CoursesCreateData) => {
  return api.post(ROUTES.COURSE_CREATE, data);
};
