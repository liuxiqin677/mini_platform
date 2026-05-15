import { Text, View } from "@tarojs/components";
import { UserProgressResponse } from "../../../../../services/user";
import "./ProgressCard.css";

interface ProgressCardProps {
  userProgress?: UserProgressResponse
}

export default function ProgressCard({ userProgress }: ProgressCardProps) {
  if (!userProgress) {
    return null
  }
  const percent = Math.round((userProgress.collected_count / userProgress.total_count) * 1000) / 10;

  return (
    <View className="progress-card">
      <View className="progress-icon-wrapper">
        <Text className="progress-icon">📚</Text>
      </View>
      <View className="flex flex-col w-full">
        <View className="progress-info">
          <Text className="progress-label">收集进度</Text>
          <Text className="progress-count">
            {userProgress.collected_count} / {userProgress.total_count}
          </Text>
        </View>
        <View className="progress-percent-wrapper">
          <Text className="progress-percent">{percent}%</Text>
          <View className="progress-bar">
            <View
              className="progress-bar-fill"
              style={{ width: `${percent}%` }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
