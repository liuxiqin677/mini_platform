import { ToolItem } from "../../services/tool";

export interface Item {
  id: string;
  name: string;
  emoji: string;
  count: number;
}

export type CollectItemType = "animal" | "plant" | "tool" | "food";

export interface CollectItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  tools?: ToolItem[];
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface MazeCollectItem {
  x: number;
  y: number;
  itemType: CollectItemType;
  item: CollectItem;
  collected: boolean;
}

export interface WorldConfig {
  playerEmoji: string;
  wallColor: string;
  pathColor: string;
  bgGradient: string;
  obstacleEmoji: string;
}
