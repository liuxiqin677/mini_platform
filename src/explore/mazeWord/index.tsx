import { Text, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useCallback, useEffect, useState } from "react";
import MazeLoading from "../../components/ANLoading/MazeLoading";
import { getWorldDetail, WorldItem } from "../../services/world";
import {
  DirectionButton,
  MazeCell,
  TreasureModal,
  WinModal,
} from "./components";
import PetModal from "./components/PetModal";
import { feeds, tools, worldConfigs } from "./constants";
import "./index.css";
import type { Pet, Treasure } from "./types";
import { generateMaze } from "./utils/maze";

export default function MazeWord() {
  const router = useRouter();
  const {
    worldId,
    worldBgColor = "#fff",
    worldName,
    worldEmoji,
    tools: toolsStr = "",
    feeds: feedsStr = "",
  } = router.params as Record<string, string>;

  const config =
    worldConfigs[worldId as keyof typeof worldConfigs] ||
    worldConfigs["wild-land"];
  const [loading, setLoading] = useState(false);
  const [worldDetail, setWorldDetail] = useState<WorldItem>();
  const [maze, setMaze] = useState<number[][]>([]);
  const [playerPos, setPlayerPos] = useState({ x: 1, y: 1 });
  const [won, setWon] = useState(false);
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [collectedTreasures, setCollectedTreasures] = useState<Treasure[]>([]);
  const [collectedPets, setCollectedPets] = useState<Pet[]>([]);
  const [showTreasureModal, setShowTreasureModal] = useState(false);
  const [showPetModal, setShowPetModal] = useState(false);
  const [currentTreasure, setCurrentTreasure] = useState<Treasure | null>(null);
  const [currentPet, setCurrentPet] = useState<Pet | null>(null);

  // 解析选中的工具和饲料
  const selectedTools = toolsStr ? toolsStr.split(",") : [];
  const selectedFeeds = feedsStr ? feedsStr.split(",") : [];
  const selectedToolsDetails = tools.filter((t) =>
    selectedTools.includes(t.id),
  );
  const selectedFeedsDetails = feeds.filter((f) =>
    selectedFeeds.includes(f.id),
  );

  const initWord = async () => {
    if (!worldId) return;
    const res = await getWorldDetail(Number(worldId));
    if (res.code === 200 && res.data) {
      setWorldDetail(res.data);
    }
  };

  const initGame = useCallback(async () => {
    Taro.showLoading({
      title: "加载中...",
    });
    setLoading(true);
    await initWord();
    Taro.hideLoading();
    setLoading(false);
    const newMaze = generateMaze(13, 13);
    setMaze(newMaze);
    setPlayerPos({ x: 1, y: 1 });
    setWon(false);
    setCollectedTreasures([]);
    setCollectedPets([]);
    setShowTreasureModal(false);
    setShowPetModal(false);
    setCurrentTreasure(null);
    setCurrentPet(null);

    // 随机放置宝藏、宠物
    const newTreasures: Treasure[] = [];
    const newPets: Pet[] = [];
    for (let y = 0; y < newMaze.length; y++) {
      for (let x = 0; x < newMaze[0].length; x++) {
        if (
          newMaze[y][x] === 1 &&
          Math.random() < 0.18 &&
          !(x === 1 && y === 1)
        ) {
          const rand = Math.random();
          // 50%概率是宝藏，50%概率是宠物
          if (rand < 0.5) {
            // 放置宝藏
            let treasureType;
            if (rand < 0.3) {
              treasureType = config.treasures[0];
            } else if (rand < 0.45) {
              treasureType = config.treasures[1];
            } else {
              treasureType = config.treasures[2];
            }
            newTreasures.push({ x, y, type: treasureType, collected: false });
          } else {
            // 放置宠物
            const petRand = Math.random();
            let petType;
            if (petRand < 0.6) {
              petType = config.pets[0];
            } else if (petRand < 0.9) {
              petType = config.pets[1];
            } else {
              petType = config.pets[2];
            }
            newPets.push({ x, y, type: petType, collected: false });
          }
        }
      }
    }
    setPets(newPets);
    setTreasures(newTreasures);
  }, [config.treasures, config.pets]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const movePlayer = useCallback(
    (dx: number, dy: number) => {
      if (won || showTreasureModal || showPetModal) return;

      setPlayerPos((prev) => {
        const newX = prev.x + dx;
        const newY = prev.y + dy;

        if (maze[newY] && maze[newY][newX] !== 0) {
          // 检查宠物
          const pet = pets.find(
            (p) => p.x === newX && p.y === newY && !p.collected,
          );
          if (pet) {
            setCurrentPet(pet);
            setShowPetModal(true);
            return { x: newX, y: newY };
          }

          // 检查宝藏
          const treasure = treasures.find(
            (t) => t.x === newX && t.y === newY && !t.collected,
          );
          if (treasure) {
            setCurrentTreasure(treasure);
            setShowTreasureModal(true);
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
    [maze, won, showTreasureModal, showPetModal, treasures, pets],
  );

  const handleTreasureDecision = (collect: boolean) => {
    if (currentTreasure) {
      setTreasures((prev) =>
        prev.map((t) =>
          t.x === currentTreasure.x && t.y === currentTreasure.y
            ? { ...t, collected: true }
            : t,
        ),
      );

      if (collect) {
        setCollectedTreasures((prev) => [...prev, currentTreasure]);
      }
    }
    setShowTreasureModal(false);
    setCurrentTreasure(null);
  };

  const handlePetDecision = (collect: boolean) => {
    if (currentPet) {
      setPets((prev) =>
        prev.map((p) =>
          p.x === currentPet.x && p.y === currentPet.y
            ? { ...p, collected: true }
            : p,
        ),
      );

      if (collect) {
        setCollectedPets((prev) => [...prev, currentPet]);
      }
    }
    setShowPetModal(false);
    setCurrentPet(null);
  };

  const handleExit = () => {
    // 返回上一页
    const pages = Taro.getCurrentPages();
    if (pages.length > 1) {
      Taro.navigateBack();
    } else {
      Taro.redirectTo({
        url: "/pages/home/index",
      });
    }
  };

  const handleMoveUp = () => movePlayer(0, -1);
  const handleMoveDown = () => movePlayer(0, 1);
  const handleMoveLeft = () => movePlayer(-1, 0);
  const handleMoveRight = () => movePlayer(1, 0);

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

  if (loading) {
    return (
      <MazeLoading
        worldName={worldName}
        worldEmoji={worldEmoji}
        worldBgColor={worldBgColor}
      />
    );
  }

  return (
    <View className="maze-word" style={{ background: config.bgGradient }}>
      <View className="maze-header">
        <View className="maze-header-btn" onClick={handleExit}>
          <Text className="maze-header-btn-icon">✕</Text>
        </View>
        <View className="maze-header-title">
          <Text className="maze-header-emoji">{config.emoji}</Text>
          <Text className="maze-header-name">{config.name}</Text>
        </View>
        <View className="maze-header-btn" onClick={initGame}>
          <Text className="maze-header-btn-icon">↺</Text>
        </View>
      </View>

      <View className="maze-items">
        <View className="maze-items-card">
          <View className="maze-items-section">
            <View className="maze-items-label">
              <Text className="maze-items-icon">🔧</Text>
              <Text className="maze-items-text">工具</Text>
            </View>
            <View className="maze-items-list">
              {selectedToolsDetails.length > 0 ? (
                selectedToolsDetails.map((tool) => (
                  <View key={tool.id} className="maze-item">
                    <Text className="maze-item-emoji">{tool.emoji}</Text>
                  </View>
                ))
              ) : (
                <Text className="maze-items-empty">未携带</Text>
              )}
            </View>
          </View>

          <View className="maze-items-divider" />

          <View className="maze-items-section">
            <View className="maze-items-label">
              <Text className="maze-items-icon">🍪</Text>
              <Text className="maze-items-text">饲料</Text>
            </View>
            <View className="maze-items-list">
              {selectedFeedsDetails.length > 0 ? (
                selectedFeedsDetails.map((feed) => (
                  <View key={feed.id} className="maze-item">
                    <Text className="maze-item-emoji">{feed.emoji}</Text>
                  </View>
                ))
              ) : (
                <Text className="maze-items-empty">未携带</Text>
              )}
            </View>
          </View>
        </View>
      </View>

      <View className="maze-stats">
        <View className="maze-stats-card">
          <View className="maze-stat">
            <Text className="maze-stat-value">{collectedPets.length}</Text>
            <Text className="maze-stat-label">宠物</Text>
          </View>
          <View className="maze-stat">
            <Text className="maze-stat-value">{collectedTreasures.length}</Text>
            <Text className="maze-stat-label">宝藏</Text>
          </View>
          <View className="maze-stat">
            <Text className="maze-stat-value">
              {treasures.filter((t) => !t.collected).length}
            </Text>
            <Text className="maze-stat-label">剩余</Text>
          </View>
        </View>
      </View>

      <View className="maze-container">
        <View className="maze-card">
          <View className="maze-content">
            {maze.map((row, y) => (
              <View key={y} className="maze-row">
                {row.map((cell, x) => {
                  const isPlayer = playerPos.x === x && playerPos.y === y;
                  const treasure = treasures.find(
                    (t) => t.x === x && t.y === y && !t.collected,
                  );
                  const pet = pets.find(
                    (p) => p.x === x && p.y === y && !p.collected,
                  );
                  const isEnd = cell === 2;
                  const isWall = cell === 0;

                  return (
                    <MazeCell
                      key={x}
                      isWall={isWall}
                      isEnd={isEnd}
                      isPlayer={isPlayer}
                      treasure={treasure}
                      pet={pet}
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
        visible={showTreasureModal}
        treasure={currentTreasure}
        onCollect={() => handleTreasureDecision(true)}
        onSkip={() => handleTreasureDecision(false)}
      />

      <PetModal
        visible={showPetModal}
        pet={currentPet}
        onCollect={() => handlePetDecision(true)}
        onSkip={() => handlePetDecision(false)}
      />

      <WinModal
        visible={won}
        worldName={config.name}
        collectedPets={collectedPets}
        collectedTreasures={collectedTreasures}
        onPlayAgain={initGame}
        onExit={handleExit}
      />
    </View>
  );
}
