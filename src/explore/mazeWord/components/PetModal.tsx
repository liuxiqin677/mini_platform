import { Button, Text, View } from '@tarojs/components'
import { rarityColors, rarityLabels } from '../constants'
import type { PetType } from '../types'
import './PetModal.css'

interface PetModalProps {
  visible: boolean
  pet: { type: PetType } | null
  onCollect: () => void
  onSkip: () => void
}

export default function PetModal({ visible, pet, onCollect, onSkip }: PetModalProps) {
  if (!visible || !pet) return null

  return (
    <View className='pet-modal-mask'>
      <View className='pet-modal-content'>
        <View className='pet-icon-wrapper' style={{ background: rarityColors[pet.type.rarity] }}>
          <Text className='pet-icon'>{pet.type.emoji}</Text>
        </View>

        <View className='pet-info'>
          <View className='pet-name-row'>
            <Text className='pet-name'>{pet.type.name}</Text>
            <View className='pet-rarity-tag' style={{ background: rarityColors[pet.type.rarity] }}>
              <Text className='pet-rarity-text'>{rarityLabels[pet.type.rarity]}</Text>
            </View>
          </View>
          <Text className='pet-description'>{pet.type.description}</Text>
        </View>

        <View className='pet-actions'>
          <Button className='pet-btn pet-btn-skip' onClick={onSkip}>
            放弃
          </Button>
          <Button className='pet-btn pet-btn-collect' onClick={onCollect}>
            获取
          </Button>
        </View>
      </View>
    </View>
  )
}
