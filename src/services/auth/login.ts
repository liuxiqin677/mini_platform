import { request } from "../../utils/request";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token_type: string;
  access_token: string;
}

export const login = (data: LoginRequest) => {
  return request<LoginResponse>({
    url: "auth/login",
    method: "POST",
    data,
  });
};
