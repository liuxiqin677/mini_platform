import { Button, ScrollView, Text, View } from "@tarojs/components";
import { UserFoodItem } from "../../../../../services/food";
import { UserToolItem } from "../../../../../services/tool";
import { WorldItem } from "../../../../../services/world";
import Empty from "./Empty";
import "./ExploreModal.css";
import ItemCard from "./ItemCard";

interface ExploreModalProps {
  visible: boolean;
  world: WorldItem | null;
  tools: UserToolItem[];
  feeds: UserFoodItem[];
  selectedTools: UserToolItem[];
  selectedFeeds: UserFoodItem[];
  onClose: () => void;
  onConfirm: () => void;
  onToggleTool: (tool: UserToolItem) => void;
  onToggleFeed: (feed: UserFoodItem) => void;
}

export default function ExploreModal({
  visible,
  world,
  tools,
  feeds,
  selectedTools,
  selectedFeeds,
  onClose,
  onConfirm,
  onToggleTool,
  onToggleFeed,
}: ExploreModalProps) {
  if (!visible || !world) return null;

  return (
    <View className="modal-mask" onClick={onClose}>
      <View className="modal-content" onClick={(e) => e.stopPropagation()}>
        <View className="modal-header">
          <View className="modal-header-left">
            <View
              className="modal-world-icon"
              style={{ background: world.gradient }}
            >
              <Text className="modal-world-emoji">{world.emoji}</Text>
            </View>
            <View className="modal-world-info">
              <Text className="modal-world-name">{world.name}</Text>
              <Text className="modal-world-desc">准备探索装备</Text>
            </View>
          </View>
          {
            (Boolean(selectedTools.length || selectedFeeds.length)) && (
              <View>
                <Text className="modal-confirm-recommand">
                  探索结束后选择的物品将会被消耗
                </Text>
              </View>
            )
          }
          <View className="modal-close-btn" onClick={onClose}>
            <Text className="modal-close-icon">✕</Text>
          </View>
        </View>

        <ScrollView className="modal-body" scrollY>
          <View className="modal-section">
            <View className="modal-section-header">
              <View className="modal-section-title-wrapper">
                <Text className="modal-section-icon">🔧</Text>
                <Text className="modal-section-title">选择工具</Text>
              </View>
              <Text className="modal-section-count">
                {selectedTools.length}/3
              </Text>
            </View>
            {tools.length ? (
              <View className="modal-grid">
                {tools.map((tool) => (
                  <View key={tool.id} className="modal-grid-item">
                    <ItemCard
                      item={tool}
                      selected={Boolean(selectedTools.find(t => t.id === tool.id))}
                      onClick={() => onToggleTool(tool)}
                      selectable
                    />
                  </View>
                ))}
              </View>
            ) : (
              <Empty />
            )}
          </View>

          <View className="modal-section">
            <View className="modal-section-header">
              <View className="modal-section-title-wrapper">
                <Text className="modal-section-icon">🍪</Text>
                <Text className="modal-section-title">选择饲料</Text>
              </View>
              <Text className="modal-section-count">
                {selectedFeeds.length}/3
              </Text>
            </View>
            {feeds.length ? (
              <View className="modal-grid">
                {feeds.map((feed) => (
                  <View key={feed.id} className="modal-grid-item">
                    <ItemCard
                      item={feed}
                      selected={Boolean(selectedFeeds.find(f => f.id === feed.id))}
                      onClick={() => onToggleFeed(feed)}
                      selectable
                    />
                  </View>
                ))}
              </View>
            ) : (
              <Empty />
            )}
          </View>
        </ScrollView>

        <View className="modal-footer">
          <Button className="modal-confirm-btn" onClick={onConfirm}>
            开始探索
          </Button>
        </View>
      </View>
    </View>
  );
}
