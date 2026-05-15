import { Button, ScrollView, Text, View } from "@tarojs/components";
import { UserFoodItem } from "../../../../../services/food";
import { UserToolItem } from "../../../../../services/tool";
import { WorldItem } from "../../../../../services/world";
import type { SelectedItems } from "../types";
import { convertToItemWithSingle } from "../utils";
import Empty from "./Empty";
import "./ExploreModal.css";
import ItemCard from "./ItemCard";

interface ExploreModalProps {
  visible: boolean;
  world: WorldItem | null;
  tools: UserToolItem[];
  feeds: UserFoodItem[];
  selectedItems: SelectedItems;
  onClose: () => void;
  onConfirm: () => void;
  onToggleTool: (id: string) => void;
  onToggleFeed: (id: string) => void;
}

export default function ExploreModal({
  visible,
  world,
  tools,
  feeds,
  selectedItems,
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
                {selectedItems.tools.length}/3
              </Text>
            </View>
            {tools.length ? (
              <View className="modal-grid">
                {tools.map((tool) => (
                  <View key={tool.id} className="modal-grid-item">
                    <ItemCard
                      item={convertToItemWithSingle(tool)}
                      selected={selectedItems.tools.includes(String(tool.id))}
                      onClick={() => onToggleTool(String(tool.id))}
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
                {selectedItems.feeds.length}/3
              </Text>
            </View>
            {feeds.length ? (
              <View className="modal-grid">
                {feeds.map((feed) => (
                  <View key={feed.id} className="modal-grid-item">
                    <ItemCard
                      item={convertToItemWithSingle(feed)}
                      selected={selectedItems.feeds.includes(String(feed.id))}
                      onClick={() => onToggleFeed(String(feed.id))}
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
