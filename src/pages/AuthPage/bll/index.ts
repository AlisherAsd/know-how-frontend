import { useLogin } from "@/entities/auth/composables/useAuth";
import type { AuthData } from "@/entities/auth/types/auth.types";
import { useState } from "react";

export const useAuthPage = () => {
  const [user, setUser] = useState<AuthData>({
    username: "",
    password: "",
  });
  const { mutate, isPending } = useLogin();

  const handleLogin = () => {
    mutate(user);
  };

  return {
    handleLogin,
    isPending,
    setUser,
    user,
  };
};
