import { api } from "@/shared/api/client";
import { ROUTES } from "../config/tags.config";

export const tags = async (): Promise<string[]> => {
  return api.get(ROUTES.TAGS).then((res) => res.data);
};
