import { User } from "auth-domain";

export interface AuthEntity {
  accessToken: string;
  user: User | null;
}

export interface AuthLogin {
  email: string, 
  password: string
}

export interface AuthRegister {
  name: string,
  email: string, 
  password: string, 
  confirmPassword: string
}