import { View } from "@tarojs/components";
import "./Empty.css";

export interface IEmptyProps {
  message?: string;
}

export default function Empty({
  message = "这里是空的噢...去大世界探索收集吧！",
}: IEmptyProps) {
  return <View className="item-card-empty">{message}</View>;
}
