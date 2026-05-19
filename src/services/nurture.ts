import { request } from "../utils/request";
import { UserAnimalItem } from "./animal";
import { UserPlantItem } from "./plant";

export interface NurtureParams {
  target_id: number;
  action_type: string; // "feed" | "pet" | "water" | "fertilize"
}

export const nurtureAnimal = (params: NurtureParams) => {
  return request<UserAnimalItem>({
    url: "nurture/animal",
    method: "POST",
    data: params,
  });
};

export const nurturePlant = (params: NurtureParams) => {
  return request<UserPlantItem>({
    url: "nurture/plant",
    method: "POST",
    data: params,
  });
};
