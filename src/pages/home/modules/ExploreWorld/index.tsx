import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { getUserFoods, UserFoodItem } from "../../../../services/food";
import { getUserTools, UserToolItem } from "../../../../services/tool";
import { getWorldList, WorldItem } from "../../../../services/world";
import ExploreModal from "./components/ExploreModal";
import ItemList from "./components/ItemList";
import WorldCard from "./components/WorldCard";
import "./index.css";
import { convertToItem } from "./utils";

export default function ExploreWorld() {
  const [showModal, setShowModal] = useState(false);
  const [worlds, setWorlds] = useState<WorldItem[]>([]);
  const [tools, setTools] = useState<UserToolItem[]>([]);
  const [foods, setFoods] = useState<UserFoodItem[]>([]);
  const [selectedWorld, setSelectedWorld] = useState<WorldItem | null>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedFeeds, setSelectedFeeds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleWorldClick = (world: WorldItem) => {
    setSelectedWorld(world);
    setSelectedTools([]);
    setSelectedFeeds([]);
    setShowModal(true);
  };

  const toggleTool = (toolId: string) => {
    setSelectedTools((prev) => {
      if (prev.includes(toolId)) {
        return prev.filter((id) => id !== toolId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, toolId];
    });
  };

  const toggleFeed = (feedId: string) => {
    setSelectedFeeds((prev) => {
      if (prev.includes(feedId)) {
        return prev.filter((id) => id !== feedId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, feedId];
    });
  };

  const handleConfirm = () => {
    if (selectedWorld) {
      setShowModal(false);
      // 跳转到迷宫页面
      Taro.navigateTo({
        url: `/explore/mazeWord/index?worldId=${selectedWorld.id}&worldBgColor=${selectedWorld.bg_color}&worldName=${selectedWorld.name}&worldEmoji=${selectedWorld.emoji}&tools=${selectedTools.join(",")}&feeds=${selectedFeeds.join(",")}`,
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const initWordList = async () => {
    const res = await getWorldList();
    if (res.code === 200 && res.data) {
      setWorlds(res.data);
    }
  };

  const initExploreItem = async () => {
    const [toolsRes, foodsRes] = await Promise.all([
      getUserTools(),
      getUserFoods(),
    ]);
    if (toolsRes.code === 200 && toolsRes.data) {
      setTools(toolsRes.data);
    }
    if (foodsRes.code === 200 && foodsRes.data) {
      setFoods(foodsRes.data);
    }
  };

  const init = async () => {
    setLoading(true);
    Taro.showLoading({
      title: "加载中...",
    });
    await initWordList();
    await initExploreItem();
    Taro.hideLoading();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View className="explore-world">
      <View className="explore-header">
        <Text className="explore-title">探索世界</Text>
        <Text className="explore-subtitle">选择一个世界开始冒险</Text>
      </View>

      <View className="explore-worlds">
        <View className="worlds-grid">
          {worlds.map((world) => (
            <View key={world.id} className="world-grid-item">
              <WorldCard
                loading={loading}
                world={world}
                onClick={() => handleWorldClick(world)}
              />
            </View>
          ))}
        </View>
      </View>

      <View className="explore-items">
        <ItemList
          loading={loading}
          title="探索工具"
          icon="🔧"
          items={convertToItem(tools)}
        />
      </View>

      <View className="explore-items">
        <ItemList
          loading={loading}
          title="携带饲料"
          icon="🍪"
          items={convertToItem(foods)}
        />
      </View>

      <ExploreModal
        visible={showModal}
        world={selectedWorld}
        tools={tools}
        feeds={foods}
        selectedItems={{ tools: selectedTools, feeds: selectedFeeds }}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        onToggleTool={toggleTool}
        onToggleFeed={toggleFeed}
      />
    </View>
  );
}
