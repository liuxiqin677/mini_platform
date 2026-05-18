import type { BookCategory, BookItem } from './types'

export const bookCategories: Record<string, BookCategory> = {
  animal_mammal: {
    id: 'animal_mammal',
    name: '哺乳动物',
    emoji: '🦁',
    description: '温血脊椎动物',
    bgColor: '#FFF5E6',
  },
  animal_wildlife: {
    id: 'animal_wildlife',
    name: '野生动物',
    emoji: '🐺',
    description: '荒野中的猎手',
    bgColor: '#FDF4FF',
  },
  animal_bird: {
    id: 'animal_bird',
    name: '鸟类',
    emoji: '🦅',
    description: '会飞的羽毛朋友',
    bgColor: '#F0F9FF',
  },
  animal_reptile: {
    id: 'animal_reptile',
    name: '爬行动物',
    emoji: '🦎',
    description: '冷血爬生物',
    bgColor: '#F0FDF4',
  },
  animal_ocean: {
    id: 'animal_ocean',
    name: '海洋生物',
    emoji: '🐬',
    description: '深海神秘生物',
    bgColor: '#EEF2FF',
  },
  plants: {
    id: 'plants',
    name: '植物',
    emoji: '🌸',
    description: '美丽的植物世界',
    bgColor: '#FFF1F2',
  },
  tools: {
    id: 'tools',
    name: '工具',
    emoji: '🔧',
    description: '有用的工具',
    bgColor: '#e6d6d7ff',
  },
  foods: {
    id: 'foods',
    name: '饲料',
    emoji: '🍽',
    description: '有用的饲料',
    bgColor: '#FFF1F2',
  },
}

export const rarityColors: Record<string, string> = {
  common: '#94A3B8',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#F59E0B',
}

export const rarityLabels: Record<string, string> = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传说',
}
