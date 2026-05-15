import { request } from "../utils/request";

export interface UserDetailResponse {
  id: number;
  username: string;
  level: number;
  food_count: number;
  tool_count: number;
  pet_count: number;
  created_at: string;
  updated_at: string;
}

export interface UserProgressResponse {
  user_id: number;
  collected_count: number;
  total_count: number;
  created_at?: string;
  updated_at?: string;
}

export const getUserDetail = () => {
  return request<UserDetailResponse>({
    url: "user/detail",
    method: "GET",
  });
};

export const getUserProgress = () => {
  return request<UserProgressResponse>({
    url: "user/collect/progress",
    method: "GET",
  });
};
