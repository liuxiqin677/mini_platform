export interface SelectedItems {
  tools: string[]
  feeds: string[]
}

export interface Item {
  id: string
  name: string
  emoji: string
  count: number
}

export interface TreasureType {
  id: string
  name: string
  emoji: string
  description: string
  rarity: "common" | "rare" | "epic"
}

export interface PetType {
  id: string
  name: string
  emoji: string
  description: string
  category: "哺乳动物" | "鸟类" | "爬行动物" | "海洋生物" | "野生动物"
  rarity: "common" | "rare" | "epic"
}

export interface Treasure {
  x: number
  y: number
  type: TreasureType
  collected: boolean
}

export interface Pet {
  x: number
  y: number
  type: PetType
  collected: boolean
}

export interface WorldConfig {
  name: string
  emoji: string
  playerEmoji: string
  wallColor: string
  pathColor: string
  bgGradient: string
  obstacleEmoji: string
  treasures: TreasureType[]
  pets: PetType[]
}
