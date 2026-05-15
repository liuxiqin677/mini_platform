import { View } from "@tarojs/components";
import { ITabItem } from "../../types";
import "./index.css";

export interface ICustomTabBarProps {
  tabItem: ITabItem[];
  tabValue: string;
  setTabValue: (value: string) => void;
}

const CustomTabBar = ({
  tabItem,
  tabValue,
  setTabValue,
}: ICustomTabBarProps) => {
  return (
    <View className="tabbar-wrapper">
      <View className="tabbar-container">
        {tabItem.map((item) => (
          <View
            key={item.id}
            className={`tabbar-item ${tabValue === item.id ? "tabbar-item-active" : ""}`}
            onClick={() => setTabValue(item.id)}
          >
            <View className="tabbar-icon">
              {item.id === "1" && "🏠"}
              {item.id === "2" && "📕"}
              {item.id === "3" && "🧝"}
            </View>
            <View className="tabbar-text-active">{item.name}</View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomTabBar;
