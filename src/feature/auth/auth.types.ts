export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  user: {
    username: string;
    balance: number;
    role: "MODERATOR" | "USER";
  } | null;
}

export interface MeResponse {
  username: string;
  balance: { id: number; userId: number; coins: number };
  role: "MODERATOR" | "USER";
}
