import { api } from "@/shared/api/client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authMe = createAsyncThunk("auth/me", async (_, { rejectWithValue }) => {
  try {
    await api.get("/api/v1/balance/history");
    return true;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : "Ошибка авторизации");
  }
});
