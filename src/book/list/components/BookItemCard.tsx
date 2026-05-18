import { View, Text } from '@tarojs/components'
import type { BookItem } from '../types'
import { rarityColors, rarityLabels } from '../constants'
import './BookItemCard.css'

interface BookItemCardProps {
  item: BookItem
}

export default function BookItemCard({ item }: BookItemCardProps) {
  return (
    <View className={`book-item-card ${!item.collected ? 'not-collected' : ''}`}>
      {item.collected && (
        <View className='collected-badge'>
          <Text className='collected-badge-icon'>✓</Text>
        </View>
      )}
      <View className='book-item-icon-wrapper'>
        <Text className='book-item-icon'>{item.emoji}</Text>
      </View>
      <Text className='book-item-name'>{item.name}</Text>
      <View className='book-item-rarity' style={{ backgroundColor: rarityColors[item.rarity] }}>
        <Text>{rarityLabels[item.rarity]}</Text>
      </View>
      <Text className='book-item-description'>{item.description}</Text>
    </View>
  )
}
