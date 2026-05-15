import { Button, Text, View } from "@tarojs/components";
import { rarityColors, rarityLabels } from "../constants";
import "./CollectModal.css";

export type CollectItemType = "animal" | "plant" | "tool" | "food";

export interface CollectItem {
  id: number;
  name: string;
  emoji: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

interface CollectModalProps {
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

export default function CollectModal({
  visible,
  itemType,
  item,
  onCollect,
  onSkip, 
}: CollectModalProps) {
  if (!visible || !item) return null;

  return (
    <View className="collect-modal-mask">
      <View className="collect-modal-content">
        <View
          className="collect-icon-wrapper"
          style={{ background: rarityColors[item.rarity] }}
        >
          <Text className="collect-icon">{item.emoji}</Text>
        </View>

        <View className="collect-info">
          <View className="collect-name-row">
            <Text className="collect-name">{item.name}</Text>
            <View
              className="collect-rarity-tag"
              style={{ background: rarityColors[item.rarity] }}
            >
              <Text className="collect-rarity-text">
                {rarityLabels[item.rarity]}
              </Text>
            </View>
          </View>
          <Text className="collect-type-label">{typeLabels[itemType]}</Text>
          <Text className="collect-description">{item.description}</Text>
        </View>

        <View className="collect-actions">
          <Button className="collect-btn collect-btn-skip" onClick={onSkip}>
            放弃
          </Button>
          <Button className="collect-btn collect-btn-collect" onClick={onCollect}>
            获取
          </Button>
        </View>
      </View>
    </View>
  );
}
