export interface BookCategory {
  id: string
  name: string
  emoji: string
  description: string
  collected: number
  total: number
  progress: number
  bgColor: string
}

export interface BookItem {
  id: string
  name: string
  emoji: string
  description: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  collected: boolean
}
