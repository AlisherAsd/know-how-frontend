export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  user: {
    username: string;
    balance: number;
  } | null;
}

export interface MeResponse {
  username: string;
  balance: { id: number; userId: number; coins: number };
}
