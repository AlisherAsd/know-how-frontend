import { useLogin } from "@/entities/auth/composables/useAuth";
import type { AuthData } from "@/entities/auth/types/auth.types";
import { useMemo, useState } from "react";

export const useAuthPage = () => {
  const [user, setUser] = useState<AuthData>({
    username: "",
    password: "",
  });
  const { mutate, isPending } = useLogin();

  const handleLogin = () => {
    mutate(user);
  };

  const disabledBtn = useMemo(
    () => !user.password.length || !user.username.length || !!isPending,
    [user, isPending]
  );

  return {
    handleLogin,
    setUser,
    user,
    disabledBtn,
  };
};
