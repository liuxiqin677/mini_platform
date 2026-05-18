import { View, Text } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { BookItemCard, ListHeader } from './components'
import { bookCategories } from './constants'
import './index.css'
import { IRouterParams, BookItem, BookCategory } from './types'
import { getAnimalsByCategory } from '../../services/animal'
import { getPlantList } from '../../services/plant'
import { getToolList } from '../../services/tool'
import { getFoodList } from '../../services/food'

export default function BookList() {
  const router = useRouter()
  const {
    categoryId = 'animal_mammal',
    categoryName,
    categoryEmoji,
    categoryDescription,
    categoryBgColor
  } = (router.params as unknown as IRouterParams)

  // Construct category from route params, fall back to bookCategories
  const defaultCategory = bookCategories[categoryId] || bookCategories.animal_mammal
  const category: BookCategory = {
    id: categoryId,
    name: decodeURIComponent(categoryName || '') || defaultCategory.name,
    emoji: decodeURIComponent(categoryEmoji || '') || defaultCategory.emoji,
    description: decodeURIComponent(categoryDescription || '') || defaultCategory.description,
    bgColor: decodeURIComponent(categoryBgColor || '') || defaultCategory.bgColor,
  }

  const [items, setItems] = useState<BookItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        let data: any[] = []
        if (categoryId.startsWith('animal_')) {
          const animalCategory = categoryId.replace('animal_', '')
          const res = await getAnimalsByCategory(animalCategory)
          if (res.code === 200 && res.data) {
            data = res.data.map(item => ({
              id: String(item.id),
              name: item.name,
              emoji: item.emoji,
              description: item.description,
              rarity: item.rarity as any,
              collected: item.is_collected,
            }))
          }
        } else if (categoryId === 'plants') {
          const res = await getPlantList()
          if (res.code === 200 && res.data) {
            data = res.data.map(item => ({
              id: String(item.id),
              name: item.name,
              emoji: item.emoji,
              description: item.description,
              rarity: item.rarity as any,
              collected: item.is_collected,
            }))
          }
        } else if (categoryId === 'tools') {
          const res = await getToolList()
          if (res.code === 200 && res.data) {
            data = res.data.map(item => ({
              id: String(item.id),
              name: item.name,
              emoji: item.emoji,
              description: item.description,
              rarity: item.rarity as any,
              collected: item.is_collected,
            }))
          }
        } else if (categoryId === 'foods') {
          const res = await getFoodList()
          if (res.code === 200 && res.data) {
            data = res.data.map(item => ({
              id: String(item.id),
              name: item.name,
              emoji: item.emoji,
              description: item.description,
              rarity: item.rarity as any,
              collected: item.is_collected,
            }))
          }
        }
        setItems(data)
      } catch (error) {
        console.error('Failed to fetch book list:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [categoryId])

  const collected = items.filter(item => item.collected).length

  if (loading) {
    return (
      <View className='book-list-page'>
        <View className='loading-wrapper'>
          <Text className='loading-text'>加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='book-list-page'>
      <ListHeader
        category={category}
        collected={collected}
        total={items.length}
      />
      <View className='book-list-content'>
        <View className='book-list-grid'>
          {items.map(item => (
            <BookItemCard key={item.id} item={item} />
          ))}
        </View>
      </View>
    </View>
  )
}
