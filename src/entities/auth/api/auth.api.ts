import { api } from "@/shared/api/client";
import { ROUTES } from "../config/auth.config";
import type { RegisterData } from "../types/auth.types";

export const login = async (username: string, password: string) => {
  return api.post(ROUTES.LOGIN, {
    username,
    password,
  });
};

export const register = async (
  username: string,
  password: string,
  email: string,
  moderatorCode?: string
) => {
  const data: RegisterData = {
    username,
    password,
    email,
  };
  if (moderatorCode) {
    data.moderatorCode = moderatorCode;
  }
  return api.post(ROUTES.REGISTER, data);
};

export const logout = async () => {
  return api.post(ROUTES.LOGOUT);
};
