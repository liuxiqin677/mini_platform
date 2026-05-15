import type { BookCategory, BookItem } from './types'

export const bookCategories: Record<string, BookCategory> = {
  mammal: {
    id: 'mammal',
    name: '哺乳动物',
    emoji: '🦁',
    description: '温血脊椎动物',
    bgColor: '#FFF5E6',
  },
  bird: {
    id: 'bird',
    name: '鸟类',
    emoji: '🦅',
    description: '会飞的羽毛朋友',
    bgColor: '#F0F9FF',
  },
  reptile: {
    id: 'reptile',
    name: '爬行动物',
    emoji: '🦎',
    description: '冷血爬生物',
    bgColor: '#F0FDF4',
  },
  marine: {
    id: 'marine',
    name: '海洋生物',
    emoji: '🐬',
    description: '深海神秘生物',
    bgColor: '#EEF2FF',
  },
  wild: {
    id: 'wild',
    name: '野生动物',
    emoji: '🐺',
    description: '荒野中的猎手',
    bgColor: '#FDF4FF',
  },
  plant: {
    id: 'plant',
    name: '植物',
    emoji: '🌸',
    description: '美丽的植物世界',
    bgColor: '#FFF1F2',
  },
  tool: {
    id: 'tool',
    name: '工具',
    emoji: '🔧',
    description: '有用的工具',
    bgColor: '#e6d6d7ff',
  },
  food: {
    id: 'food',
    name: '饲料',
    emoji: '🍽',
    description: '美丽的饲料',
    bgColor: '#FFF1F2',
  },
}

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
    { id: '1', name: '狮子', emoji: '🦁', description: '草原之王，威严的象征', rarity: 'rare', collected: true },
    { id: '2', name: '老虎', emoji: '🐯', description: '森林霸主，威风凛凛', rarity: 'epic', collected: true },
    { id: '3', name: '大象', emoji: '🐘', description: '陆地最大动物，温和而强大', rarity: 'rare', collected: true },
    { id: '4', name: '熊猫', emoji: '🐼', description: '国宝级动物，黑白萌物', rarity: 'legendary', collected: false },
    { id: '5', name: '猴子', emoji: '🐵', description: '灵活的攀爬者，聪明伶俐', rarity: 'common', collected: true },
    { id: '6', name: '长颈鹿', emoji: '🦒', description: '最高的陆地动物', rarity: 'rare', collected: false },
    { id: '7', name: '斑马', emoji: '🦓', description: '黑白条纹的奔跑者', rarity: 'common', collected: true },
    { id: '8', name: '熊', emoji: '🐻', description: '森林中的大力士', rarity: 'epic', collected: false },
  ],
  bird: [
    { id: '1', name: '老鹰', emoji: '🦅', description: '天空猎手，锐利的眼神', rarity: 'rare', collected: true },
    { id: '2', name: '鹦鹉', emoji: '🦜', description: '会说话的鸟，色彩斑斓', rarity: 'common', collected: true },
    { id: '3', name: '孔雀', emoji: '🦚', description: '美丽的尾羽', rarity: 'epic', collected: false },
    { id: '4', name: '鸽子', emoji: '🕊️', description: '和平的使者', rarity: 'common', collected: true },
  ],
  reptile: [
    { id: '1', name: '蜥蜴', emoji: '🦎', description: '灵巧的小爬虫', rarity: 'common', collected: true },
    { id: '2', name: '蛇', emoji: '🐍', description: '神秘的爬行者', rarity: 'rare', collected: false },
    { id: '3', name: '乌龟', emoji: '🐢', description: '长寿的象征', rarity: 'common', collected: true },
    { id: '4', name: '鳄鱼', emoji: '🐊', description: '水中霸主', rarity: 'epic', collected: false },
  ],
  marine: [
    { id: '1', name: '海豚', emoji: '🐬', description: '海洋精灵，聪明友善', rarity: 'rare', collected: true },
    { id: '2', name: '鲸鱼', emoji: '🐋', description: '海洋巨无霸', rarity: 'epic', collected: false },
    { id: '3', name: '章鱼', emoji: '🐙', description: '八条腿的智者', rarity: 'rare', collected: false },
    { id: '4', name: '海龟', emoji: '🐢', description: '古老的航海家', rarity: 'common', collected: true },
  ],
  wild: [
    { id: '1', name: '狼', emoji: '🐺', description: '狼群领袖，团队协作', rarity: 'rare', collected: true },
    { id: '2', name: '狐狸', emoji: '🦊', description: '狡猾的精灵', rarity: 'common', collected: true },
    { id: '3', name: '兔子', emoji: '🐰', description: '可爱的小动物', rarity: 'common', collected: true },
    { id: '4', name: '松鼠', emoji: '🐿️', description: '爱储存食物的小家伙', rarity: 'common', collected: true },
  ],
  plant: [
    { id: '1', name: '樱花', emoji: '🌸', description: '春日之花，美丽短暂', rarity: 'common', collected: true },
    { id: '2', name: '玫瑰', emoji: '🌹', description: '爱情之花，热情似火', rarity: 'rare', collected: true },
    { id: '3', name: '向日葵', emoji: '🌻', description: '阳光的追随者', rarity: 'common', collected: true },
    { id: '4', name: '仙人掌', emoji: '🌵', description: '沙漠中的勇士', rarity: 'common', collected: true },
    { id: '5', name: '四叶草', emoji: '🍀', description: '幸运的象征', rarity: 'legendary', collected: false },
  ],
  tool: [
    { id: '1', name: '工具', emoji: '🔧', description: '有用的工具', rarity: 'common', collected: true },
  ],
  food: [
    { id: '1', name: '饲料', emoji: '🍽', description: '有用的饲料', rarity: 'common', collected: true },
  ],
}
