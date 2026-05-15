export interface BookItem {
  id: string
  name: string
  emoji: string
  description: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  collected: boolean
}

export interface BookCategory {
  id: string
  name: string
  emoji: string
  description: string
  bgColor: string
}
