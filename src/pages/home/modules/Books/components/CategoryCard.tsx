import { Text, View } from "@tarojs/components";
import { CollectionProgressItem } from "../../../../../services/collection";
import "./CategoryCard.css";

interface CategoryCardProps {
  category: CollectionProgressItem;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <View className="category-card" onClick={onClick}>
      <View
        className="category-icon-wrapper"
        style={{ backgroundColor: category.bg_color }}
      >
        <Text className="category-icon">{category.emoji}</Text>
      </View>
      <View className="category-content">
        <View className="flex items-center justify-between">
          <View className="category-name">{category.name}</View>
          <Text className="category-arrow">›</Text>
        </View>
        <View className="flex justify-between items-center">
          <Text className="progress-percent">{category.progress}%</Text>
          <Text className="category-progress">
            {category.collected_count} / {category.total_count}
          </Text>
        </View>
        <View className="progress-bar-small">
          <View
            className="progress-bar-small-fill"
            style={{ width: `${category.progress}%` }}
          />
        </View>
      </View>
    </View>
  );
}
