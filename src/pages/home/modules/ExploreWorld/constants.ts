import type { Item, World } from './types'

export const worlds: World[] = [
  {
    id: "wild-land",
    name: "狂野陆地",
    emoji: "🦁",
    description: "探索草原与森林",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
    bgColor: "#fff7ed",
  },
  {
    id: "infinite-sky",
    name: "无限天空",
    emoji: "🦅",
    description: "翱翔云端之上",
    gradient: "linear-gradient(135deg, #38bdf8, #3b82f6)",
    bgColor: "#f0f9ff",
  },
  {
    id: "proud-ocean",
    name: "傲慢海洋",
    emoji: "🐋",
    description: "深入神秘海底",
    gradient: "linear-gradient(135deg, #06b6d4, #0d9488)",
    bgColor: "#ecfeff",
  },
  {
    id: "creepy-crawl",
    name: "诡异爬行",
    emoji: "🦎",
    description: "穿越阴暗洞穴",
    gradient: "linear-gradient(135deg, #059669, #047857)",
    bgColor: "#ecfdf5",
  },
  {
    id: "barren-wild",
    name: "荒芜野生",
    emoji: "🦂",
    description: "征服荒漠戈壁",
    gradient: "linear-gradient(135deg, #ca8a04, #c2410c)",
    bgColor: "#fefce8",
  },
]

export const tools: Item[] = [
  { id: "compass", name: "指南针", emoji: "🧭", count: 3 },
  { id: "flashlight", name: "手电筒", emoji: "🔦", count: 5 },
  { id: "map", name: "地图", emoji: "🗺️", count: 1 },
  { id: "knife", name: "小刀", emoji: "🔪", count: 4 },
  { id: "bottle", name: "护目镜", emoji: "🥽", count: 6 },
]

export const feeds: Item[] = [
  { id: "meat", name: "鲜肉", emoji: "🥩", count: 10 },
  { id: "fish", name: "鱼干", emoji: "🐟", count: 8 },
  { id: "fruit", name: "水果", emoji: "🍎", count: 15 },
  { id: "seed", name: "种子", emoji: "🌰", count: 12 },
  { id: "honey", name: "蜂蜜", emoji: "🍯", count: 5 },
]
