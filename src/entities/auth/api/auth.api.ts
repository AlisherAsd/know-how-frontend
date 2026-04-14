import { api } from "@/shared/api/client";
import { ROUTES } from "../config/auth.config";

export const login = async (username: string, password: string) => {
  return api.post(ROUTES.LOGIN, {
    username,
    password,
  });
};

export const register = async (username: string, password: string, email: string) => {
  return api.post(ROUTES.REGISTER, {
    username,
    password,
    email,
  });
};
