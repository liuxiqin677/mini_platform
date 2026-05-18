import { ScrollView, Text, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useCallback, useEffect, useState } from "react";
import MazeLoading from "../../components/ANLoading/MazeLoading";
import ItemCard from "../../pages/home/modules/ExploreWorld/components/ItemCard";
import { collectAnimal } from "../../services/animal";
import { collectFood, useFood, UserFoodItem } from "../../services/food";
import { collectPlant } from "../../services/plant";
import { collectTool, UserToolItem, useTool } from "../../services/tool";
import { getWorldDetail, WorldDetail } from "../../services/world";
import {
  DirectionButton,
  MazeCell,
  TreasureModal,
  WinModal,
} from "./components";
import { worldConfigs } from "./constants";
import "./index.css";
import type { CollectItem, CollectItemType, MazeCollectItem } from "./types";
import { generateMaze } from "./utils/maze";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 初始化游戏的函数，不依赖state而是接受参数
const initializeGame = (
  worldDetailData: WorldDetail,
  setMaze: (maze: number[][]) => void,
  setCollectItems: (items: MazeCollectItem[]) => void,
) => {
  const newMaze = generateMaze(13, 13);
  setMaze(newMaze);

  const allItems: Array<{
    itemType: CollectItemType;
    item: CollectItem;
  }> = [];

  // 添加动物
  worldDetailData.animals?.forEach((animal) => {
    allItems.push({
      itemType: "animal",
      item: {
        id: animal.id,
        name: animal.name,
        emoji: animal.emoji,
        description: animal.description,
        rarity: animal.rarity as any,
        tools: animal.tools,
      },
    });
  });

  // 添加植物
  worldDetailData.plants?.forEach((plant) => {
    allItems.push({
      itemType: "plant",
      item: {
        id: plant.id,
        name: plant.name,
        emoji: plant.emoji,
        description: plant.description,
        rarity: plant.rarity as any,
        tools: plant.tools,
      },
    });
  });

  // 添加工具
  worldDetailData.tools?.forEach((tool) => {
    allItems.push({
      itemType: "tool",
      item: {
        id: tool.id,
        name: tool.name,
        emoji: tool.emoji,
        description: tool.description,
        rarity: tool.rarity as any,
      },
    });
  });

  // 添加食物
  worldDetailData.foods?.forEach((food) => {
    allItems.push({
      itemType: "food",
      item: {
        id: food.id,
        name: food.name,
        emoji: food.emoji,
        description: food.description,
        rarity: food.rarity as any,
      },
    });
  });

  // 随机选择最多10个物品
  const selectedItems = allItems.sort(() => Math.random() - 0.5).slice(0, 10);

  // 随机放置物品在迷宫中
  const newCollectItems: MazeCollectItem[] = [];
  for (const itemData of selectedItems) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 100) {
      const x = Math.floor(Math.random() * (newMaze[0].length - 2)) + 1;
      const y = Math.floor(Math.random() * (newMaze.length - 2)) + 1;

      if (
        newMaze[y][x] === 1 &&
        !(x === 1 && y === 1) &&
        !newCollectItems.some((i) => i.x === x && i.y === y)
      ) {
        newCollectItems.push({
          x,
          y,
          itemType: itemData.itemType,
          item: itemData.item,
          collected: false,
        });
        placed = true;
      }
      attempts++;
    }
  }

  setCollectItems(newCollectItems);
};

export default function MazeWord() {
  const router = useRouter();
  const {
    worldId,
    worldBgColor = "#fff",
    worldName,
    worldEmoji,
    tools,
    feeds,
  } = router.params as Record<string, string>;
  const toolsData: UserToolItem[] = JSON.parse(decodeURIComponent(tools || "[]")) || [];
  const feedsData: UserFoodItem[] = JSON.parse(decodeURIComponent(feeds || "[]")) || [];

  const config =
    worldConfigs[worldId as keyof typeof worldConfigs] || worldConfigs["1"];
  const [loading, setLoading] = useState(true);
  const [worldDetail, setWorldDetail] = useState<WorldDetail>();
  const [maze, setMaze] = useState<number[][]>([]);
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 1 });
  const [won, setWon] = useState(false);
  const [collectItems, setCollectItems] = useState<MazeCollectItem[]>([]);
  const [collectedCount, setCollectedCount] = useState(0);
  const [showCollectModal, setShowCollectModal] = useState(false);
  const [currentCollectItem, setCurrentCollectItem] = useState<{
    itemType: CollectItemType;
    item: CollectItem;
    x?: number;
    y?: number;
  } | null>(null);

  const initGame = (worldDetail: WorldDetail) => {
    initializeGame(worldDetail, setMaze, setCollectItems);
    setPlayerPos({ x: 1, y: 1 });
    setWon(false);
    setCollectedCount(0);
    setShowCollectModal(false);
    setCurrentCollectItem(null);
  };

  // 只在页面初次加载时获取世界详情
  useEffect(() => {
    const loadWorldDetail = async () => {
      if (!worldId) return;
      setLoading(true);
      try {
        const res = await getWorldDetail(Number(worldId));
        if (res.code === 200 && res.data) {
          setWorldDetail(res.data);
          initGame(res.data);
        }
      } catch (error) {
        console.error("Failed to load world detail:", error);
      } finally {
        await delay(1000);
        setLoading(false);
      }
    };

    loadWorldDetail();
  }, [worldId]); // 只依赖 worldId，确保只在页面进入时执行一次

  // 重新开始游戏的函数
  const handleRestart = useCallback(async () => {
    if (!worldDetail) return;
    setLoading(true);
    initGame(worldDetail);
    await delay(1000);
    setLoading(false);
  }, [worldDetail]);

  const handleCollect = async (noToolFlag: boolean) => {
    if (!currentCollectItem) return;

    try {
      let success = false;
      switch (currentCollectItem.itemType) {
        case "animal":
          if (noToolFlag) {
            if (Math.random() > 0.05) {
              Taro.showToast({
                title: "捕获失败！请携带相关工具成功率会更高噢！",
                icon: "none",
              });
              break;
            }
          }
          const animalRes = await collectAnimal(currentCollectItem.item.id);
          success = animalRes.code === 200;
          break;
        case "plant":
          if (noToolFlag) {
            if (Math.random() > 0.05) {
              Taro.showToast({
                title: "捕获失败！请携带相关工具成功率会更高噢！",
                icon: "none",
              });
              break;
            }
          }
          const plantRes = await collectPlant(currentCollectItem.item.id);
          success = plantRes.code === 200;
          break;
        case "tool":
          const toolRes = await collectTool(currentCollectItem.item.id);
          success = toolRes.code === 200;
          break;
        case "food":
          const foodRes = await collectFood(currentCollectItem.item.id);
          success = foodRes.code === 200;
          break;
      }

      if (success) {
        // 从列表中移除该项
        setCollectItems((prev) =>
          prev.filter(
            (i) =>
              !(i.x === currentCollectItem?.x && i.y === currentCollectItem?.y),
          ),
        );
        setCollectedCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to collect item:", error);
    }

    setShowCollectModal(false);
    setCurrentCollectItem(null);
  };

  const handleSkip = () => {
    if (!currentCollectItem) return;
    // 从列表中移除该项
    setCollectItems((prev) =>
      prev.filter(
        (i) =>
          !(i.x === currentCollectItem?.x && i.y === currentCollectItem?.y),
      ),
    );
    setShowCollectModal(false);
    setCurrentCollectItem(null);
  };

  const movePlayer = useCallback(
    (dx: number, dy: number) => {
      if (won || showCollectModal) return;

      setPlayerPos((prev) => {
        const newX = prev.x + dx;
        const newY = prev.y + dy;

        if (maze[newY] && maze[newY][newX] !== 0) {
          // 检查是否有物品
          const collectItem = collectItems.find(
            (i) => i.x === newX && i.y === newY,
          );
          if (collectItem) {
            setCurrentCollectItem({
              itemType: collectItem.itemType,
              item: collectItem.item,
              x: collectItem.x,
              y: collectItem.y,
            });
            setShowCollectModal(true);
          }

          // 检查终点
          if (maze[newY][newX] === 2) {
            setWon(true);
          }

          return { x: newX, y: newY };
        }
        return prev;
      });
    },
    [maze, won, showCollectModal, collectItems],
  );

  const handleExit = useCallback(async () => {
    // 使用所有携带的工具
    for (const tool of toolsData) {
      try {
        await useTool(tool.tool_id);
      } catch (error) {
        console.error("Failed to use tool:", error);
      }
    }
    // 使用所有携带的食物
    for (const food of feedsData) {
      try {
        await useFood(food.food_id);
      } catch (error) {
        console.error("Failed to use food:", error);
      }
    }

    const pages = Taro.getCurrentPages();
    if (pages.length > 1) {
      Taro.navigateBack();
    } else {
      Taro.redirectTo({
        url: "/pages/home/index",
      });
    }
  }, [toolsData, feedsData]);

  const handleMoveUp = () => movePlayer(0, -1);
  const handleMoveDown = () => movePlayer(0, 1);
  const handleMoveLeft = () => movePlayer(-1, 0);
  const handleMoveRight = () => movePlayer(1, 0);

  if (loading) {
    return (
      <MazeLoading
        worldName={worldName}
        worldEmoji={worldEmoji}
        worldBgColor={worldBgColor}
      />
    );
  }

  if (maze.length === 0) {
    return (
      <View
        className="maze-word maze-word-loading"
        style={{ background: config.bgGradient }}
      >
        <Text className="loading-text">加载中...</Text>
      </View>
    );
  }

  return (
    <View className="maze-word" style={{ background: config.bgGradient }}>
      <View className="maze-header">
        <View className="maze-header-btn" onClick={handleExit}>
          <Text className="maze-header-btn-icon">✕</Text>
        </View>
        <View className="maze-header-title">
          <Text className="maze-header-emoji">{worldEmoji}</Text>
          <Text className="maze-header-name">{worldName}</Text>
        </View>
        <View className="maze-header-btn" onClick={handleRestart}>
          <Text className="maze-header-btn-icon">↺</Text>
        </View>
      </View>

      <View className="maze-item-list-content">
        <ScrollView className="maze-item-list-scroll" scrollX>
          {[...toolsData, ...feedsData].length > 0
            ? [...toolsData, ...feedsData].map((item) => (
                <View key={item.id} className="maze-item-list-item">
                  <ItemCard item={item} showCount={false} size="small" />
                </View>
              ))
            : null}
        </ScrollView>
      </View>

      <View className="maze-container">
        <View className="maze-card">
          <View className="maze-content">
            {maze.map((row, y) => (
              <View key={y} className="maze-row">
                {row.map((cell, x) => {
                  const isPlayer = playerPos.x === x && playerPos.y === y;
                  const collectItem = collectItems.find(
                    (i) => i.x === x && i.y === y,
                  );
                  const isEnd = cell === 2;
                  const isWall = cell === 0;

                  return (
                    <MazeCell
                      key={x}
                      isWall={isWall}
                      isEnd={isEnd}
                      isPlayer={isPlayer}
                      collectItem={collectItem}
                      wallColor={config.wallColor}
                      pathColor={config.pathColor}
                      playerEmoji={config.playerEmoji}
                    />
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="maze-controls">
        <View className="maze-controls-row">
          <DirectionButton direction="up" onClick={handleMoveUp} />
        </View>
        <View className="maze-controls-row maze-controls-row-center">
          <DirectionButton direction="left" onClick={handleMoveLeft} />
          <DirectionButton direction="down" onClick={handleMoveDown} />
          <DirectionButton direction="right" onClick={handleMoveRight} />
        </View>
      </View>

      <TreasureModal
        visible={showCollectModal}
        itemType={currentCollectItem?.itemType || "animal"}
        item={currentCollectItem?.item || null}
        toolsData={toolsData}
        onCollect={handleCollect}
        onSkip={handleSkip}
      />

      <WinModal
        visible={won}
        worldName={worldName}
        collectedCount={collectedCount}
        // totalCount={collectItems.length}
        totalCount={10}
        onClose={() => setWon(false)}
        onPlayAgain={handleRestart}
        onExit={handleExit}
      />
    </View>
  );
}
