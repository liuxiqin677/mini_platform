import { request } from "../utils/request";

export interface ToolItem {
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

export interface UserToolItem {
  id: number;
  user_id: number;
  tool_id: number;
  name: string;
  emoji: string;
  description?: string;
  rarity: string;
  count: number;
  created_at: string;
  updated_at: string;
}

export interface UserToolWithDetail {
  id: number;
  user_id: number;
  tool_id: number;
  name: string;
  emoji: string;
  description?: string;
  rarity: string;
  count: number;
  tool_detail: ToolItem;
  created_at: string;
  updated_at: string;
}

export interface UserToolCollectionResponse {
  items: UserToolWithDetail[];
  total_count: number;
}

export const getToolList = () => {
  return request<ToolItem[]>({
    url: "tools/list",
    method: "GET",
  });
};

export const getToolDetail = (toolId: number) => {
  return request<ToolItem>({
    url: "tools/detail",
    method: "GET",
    data: { tool_id: toolId },
  });
};

export const collectTool = (toolId: number) => {
  return request<boolean>({
    url: "user/collect/tool",
    method: "POST",
    data: { tool_id: toolId },
  });
};

export const getUserTools = () => {
  return request<UserToolItem[]>({
    url: "user/collect/tool/list",
    method: "GET",
  });
};

export const getUserToolsWithDetail = () => {
  return request<UserToolCollectionResponse>({
    url: "user/collect/tool/list-with-detail",
    method: "GET",
  });
};

export const editToolName = (toolId: number, name: string) => {
  return request<boolean>({
    url: "user/collect/tool/edit",
    method: "POST",
    data: { tool_id: toolId, name },
  });
};

export const deleteTool = (toolId: number) => {
  return request<boolean>({
    url: "user/collect/tool/delete",
    method: "DELETE",
    data: { tool_id: toolId },
  });
};

export const useTool = (toolId: number) => {
  return request<boolean>({
    url: "user/collect/tool/use",
    method: "POST",
    data: { tool_id: toolId },
  });
};
