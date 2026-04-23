import { useProfile } from "@/entities/profile/composables/useProfile";
import { useState } from "react";

export const useProfilePage = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const { data, isPending } = useProfile();

  return {
    isOpenBalance,
    setIsOpenBalance,
    isOpenLogout,
    setIsOpenLogout,
    isPending,
    data,
  };
};
