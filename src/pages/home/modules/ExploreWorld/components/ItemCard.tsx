import { Text, View } from "@tarojs/components";
import { Item } from "../types";
import "./ItemCard.css";

interface ItemCardProps {
  item: Item;
  selected?: boolean;
  onClick?: () => void;
  selectable?: boolean;
}

export default function ItemCard({
  item,
  selected = false,
  onClick,
  selectable = false,
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
      <View className="item-icon-wrapper">
        <Text className="item-emoji">{item.emoji}</Text>
        {!selectable && (
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
