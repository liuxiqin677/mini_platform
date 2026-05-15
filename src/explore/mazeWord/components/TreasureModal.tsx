import { Button, Text, View } from '@tarojs/components';
import { rarityColors, rarityLabels } from '../constants';
import './TreasureModal.css';

export type CollectItemType = "animal" | "plant" | "tool" | "food";

export interface CollectItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

interface TreasureModalProps {
  visible: boolean;
  itemType: CollectItemType;
  item: CollectItem | null;
  onCollect: () => void;
  onSkip: () => void;
}

const typeLabels: Record<CollectItemType, string> = {
  animal: "动物",
  plant: "植物",
  tool: "工具",
  food: "食物",
};

export default function TreasureModal({ visible, itemType, item, onCollect, onSkip }: TreasureModalProps) {
  if (!visible || !item) return null

  return (
    <View className='treasure-modal-mask'>
      <View className='treasure-modal-content'>
        <View className='treasure-icon-wrapper' style={{ background: rarityColors[item.rarity] }}>
          <Text className='treasure-icon'>{item.emoji}</Text>
        </View>

        <View className='treasure-info'>
          <View className='treasure-name-row'>
            <Text className='treasure-name'>{item.name}</Text>
            <View className='treasure-rarity-tag' style={{ background: rarityColors[item.rarity] }}>
              <Text className='treasure-rarity-text'>{rarityLabels[item.rarity]}</Text>
            </View>
          </View>
          <Text className='treasure-description'>{item.description}</Text>
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
