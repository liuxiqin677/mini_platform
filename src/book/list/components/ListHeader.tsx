import { Text, View } from '@tarojs/components'
import type { BookCategory } from '../types'
import './ListHeader.css'

interface ListHeaderProps {
  category: BookCategory
  collected: number
  total: number
}

export default function ListHeader({ category, collected, total }: ListHeaderProps) {
  const percent = Math.round((collected / total) * 100)

  return (
    <View className='list-header'>
      <View className='header-info'>
        <View className='header-icon-wrapper' style={{ backgroundColor: category.bgColor }}>
          <Text className='header-icon'>{category.emoji}</Text>
        </View>
        <View className='header-content'>
          <Text className='header-name'>{category.name}</Text>
          <Text className='header-description'>{category.description}</Text>
          <View className='header-progress'>
            <Text className='header-progress-text'>{collected} / {total}</Text>
            <View className='header-progress-bar'>
              <View className='header-progress-bar-fill' style={{ width: `${percent}%` }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
