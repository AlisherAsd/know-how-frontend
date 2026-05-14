import { ROUTES } from "../config/courses.config";
import type { CourseActionParams, CoursesCreateData } from "../types/courses.types";
import { api } from "@/shared/api/client";

export const courses = async () => {
  return api.get(ROUTES.COURSES).then((res) => res.data);
};


export const moderationCourses = async () => {
  return api.get(ROUTES.MODERATION_COURSES).then((res) => res.data);
};

export const courseById = async ({ id }: CourseActionParams) => {
  return api.get(`${ROUTES.COURSE_BY_ID}/${id}`).then((res) => res.data);
};

export const coursesCreate = async (data: CoursesCreateData) => {
  return api.post(ROUTES.COURSE_CREATE, data);
};

export const coursePay = async ({ id }: CourseActionParams) => {
  return api.post(`${ROUTES.COURSE_PAY}/${id}`);
};

export const courseDelete = async ({ id }: CourseActionParams) => {
  return api.delete(`${ROUTES.COURSE_DELETE}/${id}`);
};

export const courseRetryPassModeration = async ({ id }: CourseActionParams) => {
  return api.put(`${ROUTES.COURSE_RETRY_PASS_MODERATION}/${id}`);
};

export const courseApprove = async ({ id }: CourseActionParams) => {
  return api.post(`${ROUTES.COURSE_MODERATION_APPROVE}/${id}/approve`);
};

export const courseReject = async ({ id }: CourseActionParams) => {
  return api.post(`${ROUTES.COURSE_MODERATION_REJECT}/${id}/reject`);
};
