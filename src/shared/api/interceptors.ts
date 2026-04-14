import { api } from "./client";
import { getCsrfToken } from "./csrf-store";
import type { InternalAxiosRequestConfig } from "axios";

export const setupInterceptors = () => {
  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getCsrfToken();

    if (token) {
      config.headers["X-XSRF-TOKEN"] = token;
    }

    return config;
  });
};
