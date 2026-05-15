import { request } from "../utils/request";
import { AnimalItem } from "./animal";
import { PlantItem } from "./plant";
import { ToolItem } from "./tool";
import { FoodItem } from "./food";

export interface WorldItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  bg_color?: string;
  gradient?: string;
  animal_ids?: number[];
  plant_ids?: number[];
  tool_ids?: number[];
  food_ids?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface WorldDetail extends WorldItem {
  animals: AnimalItem[];
  plants: PlantItem[];
  tools: ToolItem[];
  foods: FoodItem[];
}

export const getWorldList = () => {
  return request<WorldItem[]>({
    url: "world/list",
    method: "GET",
  });
};

export const getWorldDetail = (worldId: number) => {
  return request<WorldDetail>({
    url: "world/detail",
    method: "GET",
    data: { world_id: worldId },
  });
};
