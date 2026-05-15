import { Text, View } from '@tarojs/components'
import { Pet, Treasure } from '../types'
import './MazeCell.css'

interface MazeCellProps {
  isWall: boolean
  isEnd: boolean
  isPlayer: boolean
  treasure?: Treasure | null
  pet?: Pet | null
  wallColor: string
  pathColor: string
  playerEmoji: string
}

export default function MazeCell({
  isWall,
  isEnd,
  isPlayer,
  treasure,
  pet,
  wallColor,
  pathColor,
  playerEmoji,
}: MazeCellProps) {
  return (
    <View
      className={`maze-cell ${isEnd && !isPlayer ? 'maze-cell-end' : ''}`}
      style={{ backgroundColor: isWall ? wallColor : pathColor }}
    >
      {isPlayer ? (
        <Text className='maze-player'>{playerEmoji}</Text>
      ) : pet ? (
        <Text className='maze-pet'>{pet.type.emoji}</Text>
      ) : treasure ? (
        <Text className='maze-treasure'>{treasure.type.emoji}</Text>
      ) : isEnd ? (
        <Text className='maze-end'>🏁</Text>
      ) : null}
    </View>
  )
}
