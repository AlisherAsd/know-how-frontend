import type { RootState } from "@/app/store/store";

export const selectAuthData = (state: RootState) => state.auth;
