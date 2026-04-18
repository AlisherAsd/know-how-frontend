import { useRegister } from "@/entities/auth/composables/useAuth";
import type { RegisterData } from "@/entities/auth/types/auth.types";
import { generateUser } from "@/widgets/RegisterPage/helpers";
import { useState } from "react";

export const useRegisterPage = () => {
  const [user, setUser] = useState<RegisterData>({
    username: "",
    password: "",
    email: "",
    moderatorCode: "",
  });
  const { mutate, isPending } = useRegister();

  const handleRegister = () => {
    mutate(user);
  };

  const handleGenerateData = () => {
    const data = generateUser()
    setUser(data)
  }
  return {
    handleRegister,
    handleGenerateData,
    isPending,
    setUser,
    user,
  };
};
