import { View } from "@tarojs/components";
import "./index.css";

/**
 * 骨架屏卡片组件
 */
export function SkeletonCard() {
  return (
    <View className="an-skeleton-card shadow-md">
      <View className="an-skeleton-card__header">
        <View className="an-skeleton-card__avatar" />
        <View className="an-skeleton-card__info">
          <View className="an-skeleton-card__line an-skeleton-card__line--title" />
          <View className="an-skeleton-card__line an-skeleton-card__line--subtitle" />
        </View>
      </View>
      <View className="an-skeleton-card__content">
        <View className="an-skeleton-card__line an-skeleton-card__line--full" />
        <View className="an-skeleton-card__line an-skeleton-card__line--partial" />
      </View>
    </View>
  );
}

/**
 * 列表骨架屏组件
 */
export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <View className="an-skeleton-list">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </View>
  );
}

/**
 * 世界卡片骨架屏
 */
export function SkeletonWorldCard() {
  return (
    <View className="an-skeleton-world-card shadow-md">
      <View className="an-skeleton-world-card__icon" />
      <View className="an-skeleton-world-card__info">
        <View className="an-skeleton-world-card__line an-skeleton-world-card__line--title" />
        <View className="an-skeleton-world-card__line an-skeleton-world-card__line--subtitle" />
      </View>
      <View className="an-skeleton-world-card__arrow" />
    </View>
  );
}

/**
 * 探索页面骨架屏
 */
export function ExplorePageSkeleton() {
  return (
    <View className="an-skeleton-explore shadow-md">
      {/* 标题骨架 */}
      <View className="an-skeleton-explore__header">
        <View className="an-skeleton-explore__line an-skeleton-explore__line--title" />
        <View className="an-skeleton-explore__line an-skeleton-explore__line--subtitle" />
      </View>

      {/* 世界卡片骨架 */}
      <View className="an-skeleton-explore__section">
        <View className="an-skeleton-explore__line an-skeleton-explore__line--section-title" />
        <View className="an-skeleton-explore__worlds">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonWorldCard key={i} />
          ))}
        </View>
      </View>

      {/* 工具和饲料骨架 */}
      <View className="an-skeleton-explore__grid">
        <View className="an-skeleton-explore__grid-item">
          <View className="an-skeleton-explore__line an-skeleton-explore__line--section-title" />
          <View className="an-skeleton-explore__icons">
            <View className="an-skeleton-explore__icon-item" />
            <View className="an-skeleton-explore__icon-item" />
            <View className="an-skeleton-explore__icon-item" />
          </View>
        </View>
        <View className="an-skeleton-explore__grid-item">
          <View className="an-skeleton-explore__line an-skeleton-explore__line--section-title" />
          <View className="an-skeleton-explore__icons">
            <View className="an-skeleton-explore__icon-item" />
            <View className="an-skeleton-explore__icon-item" />
            <View className="an-skeleton-explore__icon-item" />
          </View>
        </View>
      </View>
    </View>
  );
}

/**
 * 我的页面骨架屏
 */
export function ProfilePageSkeleton() {
  return (
    <View className="an-skeleton-profile shadow-md">
      {/* 用户信息骨架 */}
      <View className="an-skeleton-profile__user">
        <View className="an-skeleton-profile__avatar" />
        <View className="an-skeleton-profile__line an-skeleton-profile__line--name" />
        <View className="an-skeleton-profile__line an-skeleton-profile__line--desc" />
      </View>

      {/* 统计卡片骨架 */}
      <View className="an-skeleton-profile__stats">
        <View className="an-skeleton-profile__stats-card">
          <View className="an-skeleton-profile__stats-grid">
            {Array.from({ length: 3 }).map((_, i) => (
              <View key={i} className="an-skeleton-profile__stat-item">
                <View className="an-skeleton-profile__stat-icon" />
                <View className="an-skeleton-profile__line an-skeleton-profile__line--stat-value" />
                <View className="an-skeleton-profile__line an-skeleton-profile__line--stat-label" />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* 操作卡片骨架 */}
      <View className="an-skeleton-profile__actions">
        <View className="an-skeleton-profile__actions-card">
          {Array.from({ length: 2 }).map((_, i) => (
            <View key={i} className="an-skeleton-profile__action-item">
              <View className="an-skeleton-profile__action-icon" />
              <View className="an-skeleton-profile__action-info">
                <View className="an-skeleton-profile__line an-skeleton-profile__line--action-title" />
                <View className="an-skeleton-profile__line an-skeleton-profile__line--action-desc" />
              </View>
              <View className="an-skeleton-profile__action-arrow" />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
