import { Text, View } from "@tarojs/components";
import { MazeCollectItem } from "../types";
import "./MazeCell.css";

interface MazeCellProps {
  isWall: boolean;
  isEnd: boolean;
  isPlayer: boolean;
  collectItem?: MazeCollectItem | null;
  wallColor: string;
  pathColor: string;
  playerEmoji: string;
}

export default function MazeCell({
  isWall,
  isEnd,
  isPlayer,
  collectItem,
  wallColor,
  pathColor,
  playerEmoji,
}: MazeCellProps) {
  return (
    <View
      className={`maze-cell ${isEnd && !isPlayer ? "maze-cell-end" : ""}`}
      style={{ backgroundColor: isWall ? wallColor : pathColor }}
    >
      {isPlayer ? (
        <Text className="maze-player">{playerEmoji}</Text>
      ) : collectItem ? (
        <Text className="maze-collect-item">{collectItem.item.emoji}</Text>
      ) : isEnd ? (
        <Text className="maze-end">🏁</Text>
      ) : null}
    </View>
  );
}
