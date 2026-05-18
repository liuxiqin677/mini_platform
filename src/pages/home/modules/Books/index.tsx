import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {
  CollectionProgressItem,
  getCollectionProgress,
} from "../../../../services/collection";
import {
  getUserProgress,
  UserProgressResponse,
} from "../../../../services/user";
import CategoryCard from "./components/CategoryCard";
import ProgressCard from "./components/ProgressCard";
import "./index.css";

export default function Books() {
  const [userProgress, setUserProgress] = useState<UserProgressResponse>();
  const [categories, setCategories] = useState<CollectionProgressItem[]>([]);
  const handleCategoryClick = (category: CollectionProgressItem) => {
    Taro.navigateTo({
      url: `/book/list/index?categoryId=${category.id}&categoryDescription=${encodeURIComponent(category.description || "")}&categoryName=${encodeURIComponent(category.name || "")}&categoryEmoji=${encodeURIComponent(category.emoji || "")}&categoryBgColor=${encodeURIComponent(category.bg_color || "")}`,
    });
  };

  const initUserProgress = async () => {
    const res = await getUserProgress();
    if (res.code === 200 && res.data) {
      setUserProgress(res.data);
    }
  };

  const initCollectionProgress = async () => {
    const res = await getCollectionProgress();
    if (res.code === 200 && res.data) {
      setCategories(res.data.items || []);
    }
  };

  const init = async () => {
    Taro.showLoading({
      title: "加载中...",
    });
    await Promise.all([initUserProgress(), initCollectionProgress()]);
    Taro.hideLoading();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View className="books-page">
      <View className="books-header">
        <Text className="books-title">图鉴</Text>
        <Text className="books-subtitle">探索收集的生物与植物</Text>
      </View>

      <View className="books-content">
        <ProgressCard userProgress={userProgress} />

        <Text className="section-title">选择分类</Text>

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </View>
    </View>
  );
}
