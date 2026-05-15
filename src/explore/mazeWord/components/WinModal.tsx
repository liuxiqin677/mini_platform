import { Button, Text, View } from "@tarojs/components";
import "./WinModal.css";

interface WinModalProps {
  visible: boolean;
  worldName: string;
  collectedCount: number;
  totalCount: number;
  onPlayAgain: () => void;
  onClose: () => void;
  onExit: () => void;
}

export default function WinModal({
  visible,
  collectedCount,
  worldName,
  totalCount,
  onClose,
  onPlayAgain,
  onExit,
}: WinModalProps) {
  if (!visible) return null;

  return (
    <View className="win-modal-mask">
      <View className="win-modal-content">
        <Text className="win-celebration">🎉</Text>
        <Text className="win-title">恭喜通关{worldName}</Text>
        <View className="win-stats">
          <Text className="win-stats-label">收集进度</Text>
          <Text className="win-stats-value">
            {collectedCount}/{totalCount}
          </Text>
        </View>

        <View className="win-actions">
          <Button className="win-btn win-btn-again" onClick={onPlayAgain}>
            再玩一次
          </Button>
          {collectedCount < totalCount && (
            <Button className="win-btn win-btn-exit" onClick={onClose}>
              返回探索
            </Button>
          )}
          {collectedCount === totalCount && (
            <Button className="win-btn win-btn-exit" onClick={onExit}>
              退出游戏
            </Button>
          )}
        </View>
      </View>
    </View>
  );
}
