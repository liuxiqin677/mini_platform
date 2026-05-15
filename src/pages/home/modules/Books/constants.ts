import type { BookCategory } from './types'

export interface CategoryMeta {
  id: string
  name: string
  emoji: string
  description: string
  bgColor: string
}

export const categoryMetaList: CategoryMeta[] = [
  {
    id: 'animal_mammal',
    name: '哺乳动物',
    emoji: '🦁',
    description: '温血脊椎动物',
    bgColor: '#FFF5E6',
  },
  {
    id: 'animal_bird',
    name: '鸟类',
    emoji: '🦅',
    description: '会飞的羽毛朋友',
    bgColor: '#F0F9FF',
  },
  {
    id: 'animal_reptile',
    name: '爬行动物',
    emoji: '🦎',
    description: '冷血爬生物',
    bgColor: '#F0FDF4',
  },
  {
    id: 'animal_ocean',
    name: '海洋生物',
    emoji: '🐋',
    description: '深海神秘生物',
    bgColor: '#EEF2FF',
  },
  {
    id: 'animal_wildlife',
    name: '野生动物',
    emoji: '🦊',
    description: '荒野中的猎手',
    bgColor: '#FDF4FF',
  },
  {
    id: 'plants',
    name: '植物',
    emoji: '🌸',
    description: '美丽的植物世界',
    bgColor: '#FFF1F2',
  },
  {
    id: 'tools',
    name: '工具',
    emoji: '🔧',
    description: '有用的工具',
    bgColor: '#F5F5F5',
  },
  {
    id: 'foods',
    name: '饲料',
    emoji: '🍎',
    description: '有用的饲料',
    bgColor: '#FFF8F0',
  },
]

export const categoryMetaMap: Record<string, CategoryMeta> = categoryMetaList.reduce((map, meta) => {
  map[meta.id] = meta
  return map
}, {} as Record<string, CategoryMeta>)

export const rarityColors = {
  common: '#94A3B8',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#F59E0B',
}

export const rarityLabels = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传说',
}

export const categoryItems: Record<string, BookItem[]> = {
  mammal: [
    { id: '1', name: '狮子', emoji: '🦁', description: '草原之王', rarity: 'rare', collected: true },
    { id: '2', name: '老虎', emoji: '🐯', description: '森林霸主', rarity: 'epic', collected: true },
    { id: '3', name: '大象', emoji: '🐘', description: '陆地最大动物', rarity: 'rare', collected: true },
    { id: '4', name: '熊猫', emoji: '🐼', description: '国宝级动物', rarity: 'legendary', collected: false },
    { id: '5', name: '猴子', emoji: '🐵', description: '灵活的攀爬者', rarity: 'common', collected: true },
  ],
  bird: [
    { id: '1', name: '老鹰', emoji: '🦅', description: '天空猎手', rarity: 'rare', collected: true },
    { id: '2', name: '鹦鹉', emoji: '🦜', description: '会说话的鸟', rarity: 'common', collected: true },
  ],
  reptile: [
    { id: '1', name: '蜥蜴', emoji: '🦎', description: '灵巧的小爬虫', rarity: 'common', collected: true },
    { id: '2', name: '蛇', emoji: '🐍', description: '神秘的爬行者', rarity: 'rare', collected: false },
  ],
  marine: [
    { id: '1', name: '海豚', emoji: '🐬', description: '海洋精灵', rarity: 'rare', collected: true },
    { id: '2', name: '鲸鱼', emoji: '🐋', description: '海洋巨无霸', rarity: 'epic', collected: false },
  ],
  wild: [
    { id: '1', name: '狼', emoji: '🐺', description: '狼群领袖', rarity: 'rare', collected: true },
    { id: '2', name: '狐狸', emoji: '🦊', description: '狡猾的精灵', rarity: 'common', collected: true },
  ],
  plant: [
    { id: '1', name: '樱花', emoji: '🌸', description: '春日之花', rarity: 'common', collected: true },
    { id: '2', name: '玫瑰', emoji: '🌹', description: '爱情之花', rarity: 'rare', collected: true },
  ],
}
