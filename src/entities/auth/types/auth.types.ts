export interface AuthData {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
  email: string;
  moderatorCode?: string;
}
