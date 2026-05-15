import { View, Text, Button } from '@tarojs/components'
import type { TreasureType } from '../types'
import { rarityColors, rarityLabels } from '../constants'
import './TreasureModal.css'

interface TreasureModalProps {
  visible: boolean
  treasure: { type: TreasureType } | null
  onCollect: () => void
  onSkip: () => void
}

export default function TreasureModal({ visible, treasure, onCollect, onSkip }: TreasureModalProps) {
  if (!visible || !treasure) return null

  return (
    <View className='treasure-modal-mask'>
      <View className='treasure-modal-content'>
        <View className='treasure-icon-wrapper' style={{ background: rarityColors[treasure.type.rarity] }}>
          <Text className='treasure-icon'>{treasure.type.emoji}</Text>
        </View>

        <View className='treasure-info'>
          <View className='treasure-name-row'>
            <Text className='treasure-name'>{treasure.type.name}</Text>
            <View className='treasure-rarity-tag' style={{ background: rarityColors[treasure.type.rarity] }}>
              <Text className='treasure-rarity-text'>{rarityLabels[treasure.type.rarity]}</Text>
            </View>
          </View>
          <Text className='treasure-description'>{treasure.type.description}</Text>
        </View>

        <View className='treasure-actions'>
          <Button className='treasure-btn treasure-btn-skip' onClick={onSkip}>
            放弃
          </Button>
          <Button className='treasure-btn treasure-btn-collect' onClick={onCollect}>
            获取
          </Button>
        </View>
      </View>
    </View>
  )
}
