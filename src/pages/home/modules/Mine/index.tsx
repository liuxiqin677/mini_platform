import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { getUserDetail, UserDetailResponse } from "../../../../services/user";
import "./index.css";

const Mine = () => {
  const [userDetail, setUserDetail] = useState<UserDetailResponse>();

  const initUserDetail = async () => {
    const res = await getUserDetail();
    if (res.code === 200 && res.data) {
      setUserDetail(res.data);
    }
  };

  const init = async () => {
    Taro.showLoading({
      title: "加载中",
    });
    await initUserDetail();
    await Taro.hideLoading();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View className="mine-page">
      {/* 头部信息 */}
      <View className="mine-header">
        <View className="avatar-wrapper">
          <View className="avatar">🧝</View>
        </View>
        <Text className="username">{userDetail?.username}</Text>
        <View className="level-badge">
          <Text className="level-text">Lv.{userDetail?.level}</Text>
        </View>
      </View>

      {/* 统计数据 */}
      <View className="stats-card">
        <View className="stat-item">
          <Text className="stat-value">{userDetail?.pet_count}</Text>
          <Text className="stat-label">宠物数量</Text>
        </View>
        <View className="stat-divider"></View>
        <View className="stat-item">
          <Text className="stat-value">{userDetail?.food_count}</Text>
          <Text className="stat-label">饲料库存</Text>
        </View>
        <View className="stat-divider"></View>
        <View className="stat-item">
          <Text className="stat-value">{userDetail?.tool_count}</Text>
          <Text className="stat-label">工具库存</Text>
        </View>
      </View>

      {/* 功能列表 */}
      <View className="menu-list">
        <View className="menu-item" onClick={() => Taro.navigateTo({ url: '/book/animalAndPlantList/index?type=animal' })}>
          <View className="menu-icon">🐾</View>
          <Text className="menu-text">我的动物</Text>
          <Text className="menu-arrow">›</Text>
        </View>
        <View className="menu-item" onClick={() => Taro.navigateTo({ url: '/book/animalAndPlantList/index?type=plant' })}>
          <View className="menu-icon">🌱</View>
          <Text className="menu-text">我的植物</Text>
          <Text className="menu-arrow">›</Text>
        </View>
        <View className="menu-item" onClick={() => Taro.navigateTo({ url: '/book/PlantsAndFoodList/index?type=food' })}>
          <View className="menu-icon">🍖</View>
          <Text className="menu-text">我的饲料</Text>
          <Text className="menu-arrow">›</Text>
        </View>
        <View className="menu-item" onClick={() => Taro.navigateTo({ url: '/book/PlantsAndFoodList/index?type=tool' })}>
          <View className="menu-icon">⛏️</View>
          <Text className="menu-text">我的工具</Text>
          <Text className="menu-arrow">›</Text>
        </View>
      </View>
    </View>
  );
};

export default Mine;
