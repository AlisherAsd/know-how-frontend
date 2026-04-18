import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authMe } from "./authThunks";
import type { AuthState, MeResponse } from "./auth.types";

const initialState: AuthState = {
  isAuth: true,
  isLoading: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authMe.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authMe.fulfilled, (state, action: { payload: MeResponse }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = {
          username: action.payload.username,
          balance: action.payload.balance.coins,
        };
      })
      .addCase(authMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = null;
        state.error = action.payload as string;
      });
  },
});

export const { setAuth, clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
