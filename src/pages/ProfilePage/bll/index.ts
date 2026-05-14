import { useProfile } from "@/entities/profile/composables/useProfile";
import { selectAuthData } from "@/feature/auth/authSelectors";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useProfilePage = () => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);
    const { user } = useSelector(selectAuthData);

  const { data, isPending } = useProfile();

  return {
    isOpenBalance,
    setIsOpenBalance,
    isOpenLogout,
    setIsOpenLogout,
    isPending,
    data,
    shortUser: user
  };
};
