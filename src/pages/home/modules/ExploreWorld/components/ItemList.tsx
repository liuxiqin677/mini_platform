import { ScrollView, Text, View } from "@tarojs/components";
import { ReactNode } from "react";
import { SkeletonCard } from "../../../../../components/ANLoading/index";
import { Item } from "../types";
import Empty from "./Empty";
import ItemCard from "./ItemCard";
import "./ItemList.css";

interface ItemListProps {
  loading?: boolean
  items: Item[];
  title: ReactNode;
  icon: string;
}

export default function ItemList({ loading,  items, title, icon }: ItemListProps) {
  if (loading) {
    return <SkeletonCard />
  }
  return (
    <View className="item-list-container">
      <View className="item-list-header">
        <View className="item-list-icon-wrapper">
          <Text className="item-list-icon">{icon}</Text>
        </View>
        <Text className="item-list-title">{title}</Text>
        <Text className="item-list-arrow">›</Text>
      </View>
      <View className="item-list-content">
        <ScrollView className="item-list-scroll" scrollX>
          {
            items.length > 0 ? (
              items.map((item) => (
                <View key={item.id} className="item-list-item">
                  <ItemCard item={item} />
                </View>
              ))
            ) : (
              <Empty />
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}
