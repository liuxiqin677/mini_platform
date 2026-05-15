import { Text, View } from '@tarojs/components'
import { SkeletonWorldCard } from '../../../../../components/ANLoading/index'
import { WorldItem } from '../../../../../services/world'
import './WorldCard.css'

interface WorldCardProps {
  loading?: boolean
  world: WorldItem
  onClick: () => void
  isFullWidth?: boolean
}

export default function WorldCard({ loading, world, onClick, isFullWidth = false }: WorldCardProps) {
  if (loading) {
    return <SkeletonWorldCard />
  }
  return (
    <View
      className={`world-card shadow-md ${isFullWidth ? 'world-card-full' : ''}`}
      style={{ backgroundColor: world?.bg_color }}
      onClick={onClick}
    >
      <View
        className='world-icon'
        style={{ background: world?.gradient }}
      >
        <Text className='world-emoji'>{world?.emoji}</Text>
      </View>
      <View className={`world-content ${isFullWidth ? 'world-content-full' : ''}`}>
        <Text className='world-name'>{world?.name}</Text>
        <Text className='world-desc'>{world?.description}</Text>
      </View>
      {isFullWidth && (
        <Text className='world-arrow'>›</Text>
      )}
    </View>
  )
}
