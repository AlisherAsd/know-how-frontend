import { useMutation, useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { CoursesCreateData, CoursesResponseItem } from "../types/courses.types";
import { courses, coursesCreate } from "../api/courses.api";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";

export const useCourses = (): UseQueryResult<CoursesResponseItem[]> => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => courses(),
  });
};

export const useCreateCourses = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: CoursesCreateData) => coursesCreate(data),

    onSuccess: () => {
      navigate(ROUTES.COURSES);
      enqueueSnackbar("Вы успешно создали курс!", {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при создании курса: " + message, {
        variant: "error",
      });
    },
  });
};
