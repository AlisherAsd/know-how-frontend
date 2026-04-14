import { fetchCsrf } from "@/shared/api/csrf";
import { setupInterceptors } from "@/shared/api/interceptors";

export const initApp = async () => {
  setupInterceptors();
  await fetchCsrf();
};
