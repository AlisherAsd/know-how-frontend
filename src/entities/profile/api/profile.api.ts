import { api } from "@/shared/api/client";
import { ROUTES } from "../config/profile.config";

export const profile = async () => {
  return api.get(ROUTES.PROFILE).then((res) => res.data);
};
