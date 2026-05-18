import { Text, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../../components/ANLoading/index";
import {
  getUserFoodsWithDetail,
  UserFoodWithDetail,
} from "../../services/food";
import {
  getUserToolsWithDetail,
  UserToolWithDetail,
} from "../../services/tool";
import { rarityBorderColors, rarityColors } from "./constants";
import "./index.css";
import { IRouterParams, ToolOrFoodItem } from "./types";

type GroupedItems = Record<string, ToolOrFoodItem[]>;

export default function PlantsAndFoodList() {
  const router = useRouter();
  const { type = "tool" } = router.params as unknown as IRouterParams;
  const [items, setItems] = useState<ToolOrFoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: type === "tool" ? "我的工具" : "我的食物",
    });
    const fetchData = async () => {
      setLoading(true);
      try {
        if (type === "tool") {
          const res = await getUserToolsWithDetail();
          if (res.code === 200 && res.data) {
            setItems(res.data.items);
          }
        } else if (type === "food") {
          const res = await getUserFoodsWithDetail();
          if (res.code === 200 && res.data) {
            setItems(res.data.items);
          }
        }
      } catch (error) {
        console.error("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const groupByRarity = () => {
    const grouped: GroupedItems = {};
    items.forEach((item) => {
      const rarity =
        (item as UserToolWithDetail).rarity ||
        (item as UserFoodWithDetail).rarity;
      if (!grouped[rarity]) {
        grouped[rarity] = [];
      }
      grouped[rarity].push(item);
    });
    return grouped;
  };

  const rarityOrder = ["legendary", "epic", "rare", "common"];
  const rarityLabels: Record<string, string> = {
    common: "普通",
    rare: "稀有",
    epic: "史诗",
    legendary: "传说",
  };

  const groupedItems = groupByRarity();

  if (loading) {
    return (
      <View className="tool-food-page">
        <View className="tools-item-grid" style={{ padding: "0 32rpx" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View className="tool-food-page">
      <View className="content">
        {rarityOrder.map((rarity) => {
          const rarityItems = groupedItems[rarity];
          if (!rarityItems || rarityItems.length === 0) return null;

          return (
            <View key={rarity} className="rarity-section">
              <View className="rarity-header">
                <View
                  className="rarity-label"
                  style={{ backgroundColor: rarityColors[rarity] }}
                >
                  {rarityLabels[rarity]}
                </View>
                <Text className="rarity-count">{rarityItems.length} 种</Text>
              </View>

              <View className="tools-item-grid">
                {rarityItems.map((item) => {
                  const detail =
                    (item as UserToolWithDetail).tool_detail ||
                    (item as UserFoodWithDetail).food_detail;
                  return (
                    <View
                      key={item.id}
                      className="tools-item-card"
                      style={{ borderColor: rarityBorderColors[rarity] }}
                    >
                      <View className="tools-item-top">
                        <Text className="tools-item-emoji">
                          {detail?.emoji}
                        </Text>
                        <View className="tools-item-count-badge">
                          x{item.count}
                        </View>
                      </View>
                      <Text className="tools-item-name">{detail?.name}</Text>
                      <View className="tools-item-description">
                        {detail?.description}
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
