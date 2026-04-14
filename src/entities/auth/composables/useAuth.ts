import { useMutation } from "@tanstack/react-query";
import { login, register } from "../api/auth.api";
import type { AuthData, RegisterData } from "../types/auth.types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";
import { useSnackbar } from "notistack";

export const useLogin = () => {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ username, password }: AuthData) => login(username, password),

    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["me"] });
      navigate(ROUTES.MAIN);
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при входе " + message, {
        variant: "error",
      });
    },
  });
};

export const useRegister = () => {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: ({ username, password, email }: RegisterData) =>
      register(username, password, email),

    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["me"] });
      navigate(ROUTES.MAIN);
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при регистрации " + message, {
        variant: "error",
      });
    },
  });
};
