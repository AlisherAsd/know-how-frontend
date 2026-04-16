import { useMutation } from "@tanstack/react-query";
import { login, logout, register } from "../api/auth.api";
import type { AuthData, RegisterData } from "../types/auth.types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/providers/router/config";
import { useSnackbar } from "notistack";
import { authMe } from "@/feature/auth/authThunks";
import { useAppDispatch } from "@/app/store/hooks";
import { setAuth } from "@/feature/auth/authSlice";
import { initApp } from "@/app/providers/ init/initApp";

export const useLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: ({ username, password }: AuthData) => login(username, password),

    onSuccess: () => {
      navigate(ROUTES.MAIN);
      dispatch(authMe());
      enqueueSnackbar("Вы успешно вошли!", {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при входе: " + message, {
        variant: "error",
      });
    },
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: ({ username, password, email }: RegisterData) =>
      register(username, password, email),

    onSuccess: () => {
      navigate(ROUTES.MAIN);
      dispatch(authMe());

      enqueueSnackbar("Вы успешно зарегестрировались!", {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при регистрации: " + message, {
        variant: "error",
      });
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () => logout(),

    onSuccess: () => {
      navigate(ROUTES.MAIN);
      dispatch(setAuth(false));
      initApp();
      enqueueSnackbar("Вы успешно вышли :(", {
        variant: "success",
      });
    },
    onError: (e: unknown) => {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      enqueueSnackbar("Ошибка при выходе: " + message, {
        variant: "error",
      });
    },
  });
};
