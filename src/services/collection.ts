import { request } from "../utils/request";

export interface CollectionProgressItem {
  id: string;
  name: string;
  emoji: string;
  collected_count: number;
  total_count: number;
  progress: number;
  bg_color?: string;
  description?: string;
}

export interface CollectionProgressResponse {
  items: CollectionProgressItem[];
}

export const getCollectionProgress = () => {
  return request<CollectionProgressResponse>({
    url: "collection/progress",
    method: "GET",
  });
};
