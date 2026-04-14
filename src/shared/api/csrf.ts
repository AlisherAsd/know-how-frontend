import { api } from "./client";
import { setCsrfToken } from "./csrf-store";

export const fetchCsrf = async () => {
  const res = await api.get("/csrf");
  setCsrfToken(res.data.token);
};
