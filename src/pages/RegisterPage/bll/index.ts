import { useRegister } from "@/entities/auth/composables/useAuth";
import type { RegisterData } from "@/entities/auth/types/auth.types";
import { useState } from "react";

export const useRegisterPage = () => {
  const [user, setUser] = useState<RegisterData>({
    username: "",
    password: "",
    email: "",
  });
  const { mutate, isPending } = useRegister();

  const handleRegister = () => {
    mutate(user);
  };
  return {
    handleRegister,
    isPending,
    setUser,
    user,
  };
};
