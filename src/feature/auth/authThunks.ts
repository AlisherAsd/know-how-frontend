import { api } from "@/shared/api/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { MeResponse } from "./auth.types";

export const authMe = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get<MeResponse>("/api/v1/auth/me");
    return data;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : "Ошибка авторизации");
  }
});
