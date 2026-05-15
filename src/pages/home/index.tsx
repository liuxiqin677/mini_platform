import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import Books from "./modules/Books";
import CustomTabBar from "./modules/CustomTabBar";
import ExploreWorld from "./modules/ExploreWorld";
import Mine from "./modules/Mine";

const Home = () => {
  const [tabValue, setTabValue] = useState<string>("1");

  useEffect(() => {
    // 检查是否已登录
    const token = Taro.getStorageSync("token");
    if (!token) {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }
  }, []);

  return (
    <View className="page-bg flex flex-col h-screen relative">
      <View className="flex-1 overflow-auto">
        {tabValue === "1" && <ExploreWorld />}
        {tabValue === "2" && <Books /> }
        {tabValue === "3" && <Mine />}
      </View>
      <CustomTabBar
        tabItem={[
          { id: "1", name: "探索世界" },
          { id: "2", name: "图鉴" },
          { id: "3", name: "我的" },
        ]}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
    </View>
  );
};

export default Home;
