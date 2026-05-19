import { request } from "../utils/request";

export interface FootprintItem {
  id: number;
  user_id: number;
  target_type: string; // "animal" | "plant"
  target_id: number;
  action_type: string; // "collect" | "edit" | "delete" | "feed" | "pet" | "water" | "fertilize"
  old_name?: string;
  new_name?: string;
  love_change?: number;
  created_at: string;
}

export interface GetFootprintsParams {
  target_type?: string;
  action_type?: string;
  limit?: number;
  offset?: number;
}

export const getFootprintList = (params?: GetFootprintsParams) => {
  return request<FootprintItem[]>({
    url: "footprints/list",
    method: "GET",
    data: params,
  });
};
