import { api } from "@/shared/api/client";
import { ROUTES } from "../config/balance.config";

export const balanceHistory = async () => {
  return api.get(ROUTES.BALANCE_HISTORY);
};
