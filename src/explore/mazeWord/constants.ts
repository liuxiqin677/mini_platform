import type { WorldConfig } from './types';

export const worldConfigs: Record<string, WorldConfig> = {
  "1": {
    playerEmoji: "🦸",
    wallColor: "#92400e",
    pathColor: "#ffedd5",
    bgGradient: "linear-gradient(180deg, #fed7aa, #fdba74)",
    obstacleEmoji: "🌳",
  },
  "2": {
    playerEmoji: "🦸",
    wallColor: "#60a5fa",
    pathColor: "#e0f2fe",
    bgGradient: "linear-gradient(180deg, #bae6fd, #93c5fd)",
    obstacleEmoji: "☁️",
  },
  "4": {
    playerEmoji: "🦸",
    wallColor: "#0d9488",
    pathColor: "#cffafe",
    bgGradient: "linear-gradient(180deg, #a5f3fc, #67e8f9)",
    obstacleEmoji: "🪸",
  },
  "3": {
    playerEmoji: "🦸",
    wallColor: "#065f46",
    pathColor: "#d1fae5",
    bgGradient: "linear-gradient(180deg, #a7f3d0, #6ee7b7)",
    obstacleEmoji: "🍄",
  },
  "5": {
    playerEmoji: "🦸",
    wallColor: "#a16207",
    pathColor: "#fef3c7",
    bgGradient: "linear-gradient(180deg, #fde68a, #fcd34d)",
    obstacleEmoji: "🌵",
  },
   "6": {
    playerEmoji: "🦸",
    wallColor: "#be185d",
    pathColor: "#fce7f3",
    bgGradient: "linear-gradient(180deg, #fbcfe8, #f9a8d4)",
    obstacleEmoji: "🌵",
  },
}

export const rarityColors: Record<string, string> = {
  common: "linear-gradient(135deg, #9ca3af, #6b7280)",
  rare: "linear-gradient(135deg, #60a5fa, #3b82f6)",
  epic: "linear-gradient(135deg, #a855f7, #ec4899)",
  legendary: "linear-gradient(135deg, #f59e0b, #fbbf24)",
};

export const rarityLabels: Record<string, string> = {
  common: "普通",
  rare: "稀有",
  epic: "史诗",
  legendary: "传说",
};

export const tools = [
  { id: "compass", name: "指南针", emoji: "🧭", count: 3 },
  { id: "flashlight", name: "手电筒", emoji: "🔦", count: 5 },
  { id: "map", name: "地图", emoji: "🗺️", count: 1 },
  { id: "knife", name: "小刀", emoji: "🔪", count: 4 },
  { id: "bottle", name: "护目镜", emoji: "🥽", count: 6 },
]

export const feeds = [
  { id: "meat", name: "鲜肉", emoji: "🥩", count: 10 },
  { id: "fish", name: "鱼干", emoji: "🐟", count: 8 },
  { id: "fruit", name: "水果", emoji: "🍎", count: 15 },
  { id: "seed", name: "种子", emoji: "🌰", count: 12 },
  { id: "honey", name: "蜂蜜", emoji: "🍯", count: 5 },
]
