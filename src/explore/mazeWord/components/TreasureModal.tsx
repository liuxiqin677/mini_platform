import { Button, Text, View } from "@tarojs/components";
import { UserToolItem } from "../../../services/index";
import { rarityColors, rarityLabels } from "../constants";
import { CollectItem } from "../types";
import { hasRightTool } from "../utils/maze";
import "./TreasureModal.css";

export type CollectItemType = "animal" | "plant" | "tool" | "food";

interface TreasureModalProps {
  visible: boolean;
  itemType: CollectItemType;
  item: CollectItem | null;
  toolsData: UserToolItem[];
  onCollect: (noToolFlag: boolean) => void;
  onSkip: () => void;
}

const typeLabels: Record<CollectItemType, string> = {
  animal: "动物",
  plant: "植物",
  tool: "工具",
  food: "食物",
};

export default function TreasureModal({
  visible,
  itemType,
  item,
  toolsData,
  onCollect,
  onSkip,
}: TreasureModalProps) {
  if (!visible || !item) return null;

  const noToolFlag =
    ["animal", "plant"].includes(itemType) && !hasRightTool(item, toolsData);

  return (
    <View className="treasure-modal-mask">
      <View className="treasure-modal-content">
        <View
          className="treasure-icon-wrapper"
          style={{ background: rarityColors[item.rarity] }}
        >
          <Text className="treasure-icon">{item.emoji}</Text>
        </View>

        <View className="treasure-info">
          <View className="treasure-name-row">
            <Text className="treasure-name">{item.name}</Text>
            <View
              className="treasure-rarity-tag"
              style={{ background: rarityColors[item.rarity] }}
            >
              <Text className="treasure-rarity-text">
                {rarityLabels[item.rarity]}
              </Text>
            </View>
          </View>
          <Text className="treasure-description">{item.description}</Text>
          {noToolFlag && (
            <View className="treasure-warning">
              <Text className="treasure-warning-title">缺少工具</Text>
              {item.tools?.map((tool) => (
                <View className="treasure-warning-item" key={tool.id}>
                  {tool.emoji}
                  {tool.name}
                </View>
              ))}
              <Text className="treasure-warning-title">
                捕获概率会大大降低！
              </Text>
            </View>
          )}
        </View>

        <View className="treasure-actions">
          <Button className="treasure-btn treasure-btn-skip" onClick={onSkip}>
            放弃
          </Button>
          <Button
            className="treasure-btn treasure-btn-collect"
            onClick={() => {
              onCollect(noToolFlag);
            }}
          >
            获取
          </Button>
        </View>
      </View>
    </View>
  );
}
