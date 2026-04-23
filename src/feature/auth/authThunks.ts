import { api } from "@/shared/api/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MeResponse } from "./auth.types";
import { ROUTES } from "./config";

export const authMe = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get<MeResponse>(ROUTES.ME);
    return data;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : "Ошибка авторизации");
  }
});
