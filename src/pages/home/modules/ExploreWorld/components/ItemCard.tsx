import { Text, View } from "@tarojs/components";
import { UserFoodItem, UserToolItem } from "../../../../../services/index";
import "./ItemCard.css";

interface ItemCardProps {
  item: UserToolItem | UserFoodItem;
  selected?: boolean;
  showCount?: boolean;
  onClick?: () => void;
  selectable?: boolean;
  size?: 'small' | 'default';
}

export default function ItemCard({
  item,
  selected = false,
  showCount = true,
  onClick,
  selectable = false,
  size = 'default',
}: ItemCardProps) {
  return (
    <View
      className={`item-card ${selectable ? "item-card-selectable" : ""} ${selected ? "item-card-selected" : ""}`}
      onClick={selectable && onClick ? onClick : undefined}
    >
      {selectable && selected && (
        <View className="item-check">
          <Text className="item-check-icon">✓</Text>
        </View>
      )}
      <View className={`item-icon-wrapper`}>
        <Text className="item-emoji">{item.emoji}</Text>
        {!selectable && showCount && (
          <View className="item-count">
            <Text className="item-count-text">{item.count}</Text>
          </View>
        )}
      </View>
      <Text className="item-name">{item.name}</Text>
      {selectable && <Text className="item-count-label">x{item.count}</Text>}
    </View>
  );
}
