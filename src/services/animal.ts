import { request } from "../utils/request";
import { FoodItem } from "./food";
import { ToolItem } from "./tool";

export interface AnimalItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  rarity: string;
  category: string;
  is_collected: boolean;
  favorite_food_ids?: number[];
  foods: FoodItem[];
  tool_ids?: number[];
  tools: ToolItem[];
  world_ids?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface UserAnimalItem {
  id: number;
  user_id: number;
  animal_id: number;
  name: string;
  original_name: string;
  emoji: string;
  description?: string;
  rarity: string;
  created_at: string;
  updated_at: string;
}

export const getAnimalsByCategory = (category: string) => {
  const categoryMap: Record<string, string> = {
    mammal: "mammals/animals/list",
    bird: "birds/animals/list",
    reptile: "reptiles/animals/list",
    ocean: "ocean/animals/list",
    wildlife: "wildlife/animals/list",
  };

  return request<AnimalItem[]>({
    url: categoryMap[category] || "mammals/animals/list",
    method: "GET",
  });
};

export const getAnimalDetail = (animalId: number) => {
  return request<AnimalItem>({
    url: "animals/detail",
    method: "GET",
    data: { animal_id: animalId },
  });
};

export const collectAnimal = (animalId: number) => {
  return request<boolean>({
    url: "user/collect/animal",
    method: "POST",
    data: { animal_id: animalId },
  });
};

export const getUserAnimals = () => {
  return request<UserAnimalItem[]>({
    url: "user/collect/animal/list",
    method: "GET",
  });
};

export const editAnimalName = (animalId: number, name: string) => {
  return request<boolean>({
    url: "user/collect/animal/edit",
    method: "POST",
    data: { animal_id: animalId, name },
  });
};

export const deleteAnimal = (animalId: number) => {
  return request<boolean>({
    url: "user/collect/animal/delete",
    method: "DELETE",
    data: { animal_id: animalId },
  });
};
