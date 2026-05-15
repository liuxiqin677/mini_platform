import { View, Text } from '@tarojs/components'
import './DirectionButton.css'

interface DirectionButtonProps {
  direction: 'up' | 'down' | 'left' | 'right'
  onClick: () => void
}

const directionIcons = {
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
}

export default function DirectionButton({ direction, onClick }: DirectionButtonProps) {
  return (
    <View className='direction-button' onClick={onClick}>
      <Text className='direction-icon'>{directionIcons[direction]}</Text>
    </View>
  )
}
