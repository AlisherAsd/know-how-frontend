import type { RegisterData } from "@/entities/auth/types/auth.types";

export function generateUser(): RegisterData {
  const username = "user" + Math.floor(Math.random() * 10000);

  const email = username + "@gmail.com";

  const password = "Aa3434" +
    Math.floor(Math.random() * 100) +
    "!@" +
    Math.random().toString(36).slice(-2);

  return {
    username,
    password,
    email,
    moderatorCode: ""
  };
}
