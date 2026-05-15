import { View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { bookCategories, categoryItems } from './constants'
import { ListHeader, BookItemCard } from './components'
import './index.css'

export default function BookList() {
  const router = useRouter()
  const { categoryId = 'mammal' } = router.params as Record<string, string>

  const category = bookCategories[categoryId] || bookCategories.mammal
  const items = categoryItems[categoryId] || categoryItems.mammal
  const collected = items.filter(item => item.collected).length

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
