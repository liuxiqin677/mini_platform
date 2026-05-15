import { request } from "../utils/request";

export interface FoodItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  rarity: string;
  is_collected: boolean;
  world_ids?: number[];
  target_ids?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface UserFoodItem {
  id: number;
  user_id: number;
  food_id: number;
  name: string;
  emoji: string;
  description?: string;
  rarity: string;
  count: number;
  created_at: string;
  updated_at: string;
}

export interface UserFoodWithDetail {
  id: number;
  user_id: number;
  food_id: number;
  name: string;
  emoji: string;
  description?: string;
  rarity: string;
  count: number;
  food_detail: FoodItem;
  created_at: string;
  updated_at: string;
}

export interface UserFoodCollectionResponse {
  items: UserFoodWithDetail[];
  total_count: number;
}

export const getFoodList = () => {
  return request<FoodItem[]>({
    url: "foods/list",
    method: "GET",
  });
};

export const getFoodDetail = (foodId: number) => {
  return request<FoodItem>({
    url: "foods/detail",
    method: "GET",
    data: { food_id: foodId },
  });
};

export const collectFood = (foodId: number) => {
  return request<boolean>({
    url: "user/collect/food",
    method: "POST",
    data: { food_id: foodId },
  });
};

export const getUserFoods = () => {
  return request<UserFoodItem[]>({
    url: "user/collect/food/list",
    method: "GET",
  });
};

export const getUserFoodsWithDetail = () => {
  return request<UserFoodCollectionResponse>({
    url: "user/collect/food/list-with-detail",
    method: "GET",
  });
};

export const editFoodName = (foodId: number, name: string) => {
  return request<boolean>({
    url: "user/collect/food/edit",
    method: "POST",
    data: { food_id: foodId, name },
  });
};

export const deleteFood = (foodId: number) => {
  return request<boolean>({
    url: "user/collect/food/delete",
    method: "DELETE",
    data: { food_id: foodId },
  });
};
