import { Button, Text, View } from '@tarojs/components'
import type { Pet, Treasure } from '../types'
import './WinModal.css'

interface WinModalProps {
  visible: boolean
  worldName: string
  collectedPets: Pet[]
  collectedTreasures: Treasure[]
  onPlayAgain: () => void
  onExit: () => void
}

export default function WinModal({
  visible,
  collectedPets,
  worldName,
  collectedTreasures,
  onPlayAgain,
  onExit,
}: WinModalProps) {
  if (!visible) return null

  return (
    <View className='win-modal-mask'>
      <View className='win-modal-content'>
        <Text className='win-celebration'>🎉</Text>
        <Text className='win-title'>恭喜通关{worldName}</Text>
        {collectedTreasures.length > 0 && (
          <View className='win-treasures'>
            <Text className='win-treasures-label'>收集的宝藏:</Text>
            <View className='win-treasures-list'>
              {collectedTreasures.map((t, i) => (
                <View key={i} className='win-treasure-item'>
                  <Text className='win-treasure-emoji'>{t.type.emoji}</Text>
                  <Text className='win-treasure-name'>{t.type.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        {collectedPets.length > 0 && (
          <View className='win-treasures'>
            <Text className='win-treasures-label'>捕获的宠物:</Text>
            <View className='win-treasures-list'>
              {collectedPets.map((t, i) => (
                <View key={i} className='win-treasure-item'>
                  <Text className='win-treasure-emoji'>{t.type.emoji}</Text>
                  <Text className='win-treasure-name'>{t.type.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View className='win-actions'>
          <Button className='win-btn win-btn-again' onClick={onPlayAgain}>
            再玩一次
          </Button>
          <Button className='win-btn win-btn-exit' onClick={onExit}>
            返回探索
          </Button>
        </View>
      </View>
    </View>
  )
}
