import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { balanceHistory } from "../api/balance.api";
import type { BalanceHistoryResponse } from "../types/balance.types";

export const useBalanceHistory = (): UseQueryResult<BalanceHistoryResponse> => {
  return useQuery({
    queryKey: ["balance_history"],
    queryFn: () => balanceHistory().then((res) => res.data),
  });
};
