import { Text, View } from "@tarojs/components";
import "./index.css";

export interface IMazeLoadingProps {
  worldName?: string;
  worldEmoji?: string;
  worldBgColor?: string;
}

/**
 * 迷宫加载页面组件
 */
export default function MazeLoading({ worldName = '世界', worldEmoji = '🌍', worldBgColor = '#fff' }: IMazeLoadingProps) {
  return (
    <View className="an-maze-loading">
      {/* 世界入口动画 */}
      <View className="an-maze-loading__world-container">
        {/* 发光圆环 */}
        <View className="an-maze-loading__ring an-maze-loading__ring--outer" />
        <View className="an-maze-loading__ring an-maze-loading__ring--inner" />

        {/* 中心图标 */}
        <View className="an-maze-loading__world" style={{ background: worldBgColor }}>
          <Text className="an-maze-loading__world-icon">{worldEmoji}</Text>
        </View>
      </View>

      {/* 进入提示 */}
      <Text className="an-maze-loading__title">正在进入</Text>
      <Text className="an-maze-loading__world-name">{worldName}</Text>

      {/* 加载条 */}
      <View className="an-maze-loading__progress-bar">
        <View className="an-maze-loading__progress-fill" />
      </View>

      <Text className="an-maze-loading__hint">准备探索装备中...</Text>
    </View>
  );
}
