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

export interface IRouterParams {
  categoryId: "animal_mammal" | 'animal_wildlife' | 'animal_bird' | 'animal_reptile' | 'animal_ocean' | 'plants' | 'tools' | 'foods'
  categoryName?: string
  categoryEmoji?: string
  categoryDescription?: string
  categoryBgColor?: string
}
