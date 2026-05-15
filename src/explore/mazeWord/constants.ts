import type { WorldConfig } from './types'

export const worldConfigs: Record<string, WorldConfig> = {
  "wild-land": {
    name: "狂野陆地",
    emoji: "🦁",
    playerEmoji: "🐆",
    wallColor: "#92400e",
    pathColor: "#ffedd5",
    bgGradient: "linear-gradient(180deg, #fed7aa, #fdba74)",
    obstacleEmoji: "🌳",
    treasures: [
      { id: "bone", name: "远古骨头", emoji: "🦴", description: "一块神秘的远古生物骨头，散发着原始的气息", rarity: "common" },
      { id: "paw", name: "狮王爪印", emoji: "🐾", description: "传说中狮王留下的印记，蕴含野性力量", rarity: "rare" },
      { id: "crown", name: "丛林王冠", emoji: "👑", description: "属于草原之王的王冠，极其珍贵", rarity: "epic" },
    ],
    pets: [
      { id: "lion", name: "霸王狮", emoji: "🦁", description: "一个强大的、凶狠的狮子", rarity: "common", category: "哺乳动物" },
      { id: "xingxing", name: "红毛猩猩", emoji: "🦧", description: "稀有的红毛猩猩，据说能带来好运", rarity: "rare", category: "哺乳动物" },
      { id: "fox", name: "狐狸", emoji: "🦊", description: "一只美丽动人的狐狸（我好像能理解纣王了）", rarity: "epic", category: "哺乳动物" },
    ],
  },
  "infinite-sky": {
    name: "无限天空",
    emoji: "🦅",
    playerEmoji: "🕊️",
    wallColor: "#60a5fa",
    pathColor: "#e0f2fe",
    bgGradient: "linear-gradient(180deg, #bae6fd, #93c5fd)",
    obstacleEmoji: "☁️",
    treasures: [
      { id: "feather", name: "云雀羽毛", emoji: "🪶", description: "轻盈的云雀羽毛，触感如云朵般柔软", rarity: "common" },
      { id: "star", name: "坠落星辰", emoji: "⭐", description: "从天空坠落的星星，闪耀着神秘光芒", rarity: "rare" },
      { id: "rainbow", name: "彩虹碎片", emoji: "🌈", description: "凝固的彩虹精华，七彩流转", rarity: "epic" },
    ],
    pets: [
      { id: "lion", name: "霸王狮", emoji: "🦁", description: "一个强大的、凶狠的狮子", rarity: "common", category: "哺乳动物" },
      { id: "xingxing", name: "红毛猩猩", emoji: "🦧", description: "稀有的红毛猩猩，据说能带来好运", rarity: "rare", category: "哺乳动物" },
      { id: "fox", name: "狐狸", emoji: "🦊", description: "一只美丽动人的狐狸（我好像能理解纣王了）", rarity: "epic", category: "哺乳动物" },
    ],
  },
  "proud-ocean": {
    name: "傲慢海洋",
    emoji: "🐋",
    playerEmoji: "🐠",
    wallColor: "#0d9488",
    pathColor: "#cffafe",
    bgGradient: "linear-gradient(180deg, #a5f3fc, #67e8f9)",
    obstacleEmoji: "🪸",
    treasures: [
      { id: "shell", name: "珍珠贝壳", emoji: "🐚", description: "含有珍珠的美丽贝壳，来自深海", rarity: "common" },
      { id: "trident", name: "海神权杖", emoji: "🔱", description: "传说中海神使用的权杖碎片", rarity: "rare" },
      { id: "pearl", name: "龙王明珠", emoji: "🔮", description: "龙宫中的至宝，闪烁幽蓝光芒", rarity: "epic" },
    ],
    pets: [
      { id: "lion", name: "霸王狮", emoji: "🦁", description: "一个强大的、凶狠的狮子", rarity: "common", category: "哺乳动物" },
      { id: "xingxing", name: "红毛猩猩", emoji: "🦧", description: "稀有的红毛猩猩，据说能带来好运", rarity: "rare", category: "哺乳动物" },
      { id: "fox", name: "狐狸", emoji: "🦊", description: "一只美丽动人的狐狸（我好像能理解纣王了）", rarity: "epic", category: "哺乳动物" },
    ],
  },
  "creepy-crawl": {
    name: "诡异爬行",
    emoji: "🦎",
    playerEmoji: "🐍",
    wallColor: "#065f46",
    pathColor: "#d1fae5",
    bgGradient: "linear-gradient(180deg, #a7f3d0, #6ee7b7)",
    obstacleEmoji: "🍄",
    treasures: [
      { id: "egg", name: "神秘虫卵", emoji: "🥚", description: "不知名生物的卵，隐约能感到生命力", rarity: "common" },
      { id: "venom", name: "剧毒精华", emoji: "🧪", description: "从毒蛇牙齿中提取的珍贵毒液", rarity: "rare" },
      { id: "eye", name: "蛇神之眼", emoji: "👁️", description: "传说中的蛇神遗落的宝石眼睛", rarity: "epic" },
    ],
    pets: [
      { id: "lion", name: "霸王狮", emoji: "🦁", description: "一个强大的、凶狠的狮子", rarity: "common", category: "哺乳动物" },
      { id: "xingxing", name: "红毛猩猩", emoji: "🦧", description: "稀有的红毛猩猩，据说能带来好运", rarity: "rare", category: "哺乳动物" },
      { id: "fox", name: "狐狸", emoji: "🦊", description: "一只美丽动人的狐狸（我好像能理解纣王了）", rarity: "epic", category: "哺乳动物" },
    ],
  },
  "barren-wild": {
    name: "荒芜野生",
    emoji: "🦂",
    playerEmoji: "🦎",
    wallColor: "#a16207",
    pathColor: "#fef3c7",
    bgGradient: "linear-gradient(180deg, #fde68a, #fcd34d)",
    obstacleEmoji: "🌵",
    treasures: [
      { id: "cactus", name: "仙人掌花", emoji: "🌸", description: "沙漠中罕见的仙人掌花，美丽而坚韧", rarity: "common" },
      { id: "diamond", name: "沙漠钻石", emoji: "💎", description: "在沙漠深处形成的稀有钻石", rarity: "rare" },
      { id: "scarab", name: "黄金圣甲虫", emoji: "🪲", description: "古老文明崇拜的黄金圣物", rarity: "epic" },
    ],
    pets: [
      { id: "lion", name: "霸王狮", emoji: "🦁", description: "一个强大的、凶狠的狮子", rarity: "common", category: "哺乳动物" },
      { id: "xingxing", name: "红毛猩猩", emoji: "🦧", description: "稀有的红毛猩猩，据说能带来好运", rarity: "rare", category: "哺乳动物" },
      { id: "fox", name: "狐狸", emoji: "🦊", description: "一只美丽动人的狐狸（我好像能理解纣王了）", rarity: "epic", category: "哺乳动物" },
    ],
  },
}

export const rarityColors = {
  common: "linear-gradient(135deg, #9ca3af, #6b7280)",
  rare: "linear-gradient(135deg, #60a5fa, #3b82f6)",
  epic: "linear-gradient(135deg, #a855f7, #ec4899)",
}

export const rarityLabels = {
  common: "普通",
  rare: "稀有",
  epic: "史诗",
}

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
