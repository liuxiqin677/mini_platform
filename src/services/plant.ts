import { request } from "../utils/request";

export interface PlantItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  rarity: string;
  is_collected: boolean;
  favorite_food_ids?: number[];
  tool_ids?: number[];
  world_ids?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface UserPlantItem {
  id: number;
  user_id: number;
  plant_id: number;
  name: string;
  description?: string;
  rarity: string;
  created_at: string;
  updated_at: string;
}

export const getPlantList = () => {
  return request<PlantItem[]>({
    url: "plants/animals/list",
    method: "GET",
  });
};

export const getPlantDetail = (plantId: number) => {
  return request<PlantItem>({
    url: "plants/detail",
    method: "GET",
    data: { plant_id: plantId },
  });
};

export const collectPlant = (plantId: number) => {
  return request<boolean>({
    url: "user/collect/plant",
    method: "POST",
    data: { plant_id: plantId },
  });
};

export const getUserPlants = () => {
  return request<UserPlantItem[]>({
    url: "user/collect/plant/list",
    method: "GET",
  });
};

export const editPlantName = (plantId: number, name: string) => {
  return request<boolean>({
    url: "user/collect/plant/edit",
    method: "POST",
    data: { plant_id: plantId, name },
  });
};

export const deletePlant = (plantId: number) => {
  return request<boolean>({
    url: "user/collect/plant/delete",
    method: "DELETE",
    data: { plant_id: plantId },
  });
};
