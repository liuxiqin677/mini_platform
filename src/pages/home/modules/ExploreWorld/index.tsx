import { Text, View } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { getUserFoods, UserFoodItem } from "../../../../services/food";
import { getUserTools, UserToolItem } from "../../../../services/tool";
import { getWorldList, WorldItem } from "../../../../services/world";
import ExploreModal from "./components/ExploreModal";
import ItemList from "./components/ItemList";
import WorldCard from "./components/WorldCard";
import "./index.css";

export default function ExploreWorld() {
  const [showModal, setShowModal] = useState(false);
  const [worlds, setWorlds] = useState<WorldItem[]>([]);
  const [tools, setTools] = useState<UserToolItem[]>([]);
  const [foods, setFoods] = useState<UserFoodItem[]>([]);
  const [selectedWorld, setSelectedWorld] = useState<WorldItem | null>(null);
  const [selectedTools, setSelectedTools] = useState<UserToolItem[]>([]);
  const [selectedFeeds, setSelectedFeeds] = useState<UserFoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleWorldClick = (world: WorldItem) => {
    setSelectedWorld(world);
    setSelectedTools([]);
    setSelectedFeeds([]);
    setShowModal(true);
  };

  const toggleTool = (tool: UserToolItem) => {
    setSelectedTools((prev) => {
      if (prev.find((t) => t.id === tool.id)) {
        return prev.filter((t) => t.id !== tool.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, tool];
    });
  };

  const toggleFeed = (feed: UserFoodItem) => {
    setSelectedFeeds((prev) => {
      if (prev.find((f) => f.id === feed.id)) {
        return prev.filter((f) => f.id !== feed.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, feed];
    });
  };

  const handleConfirm = () => {
    if (selectedWorld) {
      setShowModal(false);
      // 跳转到迷宫页面
      Taro.navigateTo({
        url: `/explore/mazeWord/index?worldId=${selectedWorld.id}&worldBgColor=${selectedWorld.bg_color}&worldName=${selectedWorld.name}&worldEmoji=${selectedWorld.emoji}&tools=${encodeURIComponent(JSON.stringify(selectedTools))}&feeds=${encodeURIComponent(JSON.stringify(selectedFeeds))}`,
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

  useDidShow(() => {
    init();
  });

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
          items={tools}
        />
      </View>

      <View className="explore-items">
        <ItemList
          loading={loading}
          title="携带饲料"
          icon="🍪"
          items={foods}
        />
      </View>

      <ExploreModal
        visible={showModal}
        world={selectedWorld}
        tools={tools}
        feeds={foods}
        selectedTools={selectedTools}
        selectedFeeds={selectedFeeds}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        onToggleTool={toggleTool}
        onToggleFeed={toggleFeed}
      />
    </View>
  );
}
