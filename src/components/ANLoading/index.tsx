import { Text, View } from "@tarojs/components";
import "./index.css";

export interface IANLoadingProps {
  message?: string;
  fullScreen?: boolean;
}

const ANLoading = ({
  message = "加载中...",
  fullScreen = true,
}: IANLoadingProps) => {
  return (
    <View className={`an-loading ${fullScreen ? "an-loading--fullscreen" : ""}`}>
      {/* 可爱的宠物动画 */}
      <View className="an-loading__pet-container">
        {/* 外圈旋转光环 */}
        <View className="an-loading__ring an-loading__ring--outer" />
        <View className="an-loading__ring an-loading__ring--inner" />

        {/* 中心宠物图标 */}
        <View className="an-loading__pet">
          <Text className="an-loading__pet-icon">🐾</Text>
        </View>
      </View>

      {/* 加载文字 */}
      <Text className="an-loading__message">{message}</Text>

      {/* 跳动的小点 */}
      <View className="an-loading__dots">
        <View className="an-loading__dot an-loading__dot--1" />
        <View className="an-loading__dot an-loading__dot--2" />
        <View className="an-loading__dot an-loading__dot--3" />
      </View>
    </View>
  );
};

export default ANLoading;

// ===== 导出骨架屏组件 =====
export {
  ExplorePageSkeleton,
  ProfilePageSkeleton, SkeletonCard,
  SkeletonList,
  SkeletonWorldCard
} from "./Skeleton";

// ===== 导出迷宫加载组件 =====
export { default as MazeLoading } from "./MazeLoading";
export type { IMazeLoadingProps } from "./MazeLoading";
