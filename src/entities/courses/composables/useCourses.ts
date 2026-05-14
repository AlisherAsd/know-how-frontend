import { useMutation, useQuery, useQueryClient, type UseQueryResult } from "@tanstack/react-query";
import type {
  CourseActionParams,
  CoursesCreateData,
  CoursesResponseItem,
} from "../types/courses.types";
import {
  courseById,
  courseApprove,
  courseDelete,
  coursePay,
  courseReject,
  courseRetryPassModeration,
  courses,
  coursesCreate,
  moderationCourses,
  myCourses,
} from "../api/courses.api";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Неизвестная ошибка";

export const useCourses = (search: string): UseQueryResult<CoursesResponseItem[]> => {
  return useQuery({
    queryKey: ["courses", search],
    queryFn: () => courses(search),
  });
};

export const useMyCourses = (): UseQueryResult<CoursesResponseItem[]> => {
  return useQuery({
    queryKey: ["my_courses"],
    queryFn: () => myCourses(),
  });
};

export const useModerationCourses = (): UseQueryResult<CoursesResponseItem[]> => {
  return useQuery({
    queryKey: ["moderation_courses"],
    queryFn: () => moderationCourses(),
  });
};

export const useCourseById = (id?: number): UseQueryResult<CoursesResponseItem> => {
  return useQuery({
    queryKey: ["courses", id],
    queryFn: () => courseById({ id: id! }),
    enabled: typeof id === "number" && Number.isFinite(id),
  });
};

export const useCreateCourses = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CoursesCreateData) => coursesCreate(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      navigate(ROUTES.COURSES);
      enqueueSnackbar("Вы успешно создали курс!", {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      enqueueSnackbar("Ошибка при создании курса: " + getErrorMessage(e), {
        variant: "error",
      });
    },
  });
};

const useCourseActionMutation = (
  mutationFn: (params: CourseActionParams) => Promise<unknown>,
  successMessage: string,
  errorPrefix: string
) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      enqueueSnackbar(successMessage, {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      enqueueSnackbar(`${errorPrefix}: ${getErrorMessage(e)}`, {
        variant: "error",
      });
    },
  });
};

export const usePayCourse = () =>
  useCourseActionMutation(coursePay, "Оплата курса выполнена!", "Ошибка при оплате курса");

export const useDeleteCourse = () =>
  useCourseActionMutation(courseDelete, "Курс успешно удален!", "Ошибка при удалении курса");

export const useRetryPassModerationCourse = () =>
  useCourseActionMutation(
    courseRetryPassModeration,
    "Курс повторно отправлен на модерацию!",
    "Ошибка при повторной отправке на модерацию"
  );

export const useApproveCourse = () =>
  useCourseActionMutation(courseApprove, "Курс успешно одобрен!", "Ошибка при одобрении курса");

export const useRejectCourse = () =>
  useCourseActionMutation(courseReject, "Курс успешно отклонен!", "Ошибка при отклонении курса");
