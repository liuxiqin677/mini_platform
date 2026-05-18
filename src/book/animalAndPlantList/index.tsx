import { Text, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useCallback, useEffect, useState } from "react";
import { SkeletonList } from "../../components/ANLoading/index";
import {
  deleteAnimal,
  editAnimalName,
  getUserAnimals,
} from "../../services/animal";
import {
  deletePlant,
  editPlantName,
  getUserPlants,
} from "../../services/plant";
import DeleteModal from "./components/DeleteModal";
import EditNameModal from "./components/EditNameModal";
import "./index.css";
import { AnimalOrPlantItem, IRouterParams } from "./types";

export default function AnimalAndPlantList() {
  const router = useRouter();
  const { type = "animal" } = router.params as unknown as IRouterParams;
  const [items, setItems] = useState<AnimalOrPlantItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 编辑名称弹窗状态
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<AnimalOrPlantItem | null>(
    null,
  );

  // 删除弹窗状态
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingItem, setDeletingItem] = useState<AnimalOrPlantItem | null>(
    null,
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (type === "animal") {
        const res = await getUserAnimals();
        if (res.code === 200 && res.data) {
          setItems(res.data);
        }
      } else if (type === "plant") {
        const res = await getUserPlants();
        if (res.code === 200 && res.data) {
          setItems(res.data);
        }
      }
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: type === "animal" ? "我的动物" : "我的植物",
    });
    fetchData();
  }, [fetchData]);

  const handleEdit = (item: AnimalOrPlantItem) => {
    setEditingItem(item);
    setShowEditModal(true);
  };

  const handleEditConfirm = async (newName: string) => {
    if (!editingItem) return;

    try {
      if (type === "animal") {
        await editAnimalName(editingItem.id, newName);
      } else {
        await editPlantName(editingItem.id, newName);
      }
      Taro.showToast({
        title: "修改成功",
        icon: "success",
        duration: 1000,
        complete: () => fetchData(),
      });
    } catch (error) {
      console.error("Failed to edit:", error);
      Taro.showToast({ title: "修改失败", icon: "none" });
    } finally {
      setShowEditModal(false);
      setEditingItem(null);
    }
  };

  const handleEditCancel = () => {
    setShowEditModal(false);
    setEditingItem(null);
  };

  const handleDelete = (item: AnimalOrPlantItem) => {
    setDeletingItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingItem) return;

    try {
      if (type === "animal") {
        await deleteAnimal(deletingItem.id);
      } else {
        await deletePlant(deletingItem.id);
      }
      Taro.showToast({
        title: "放生成功",
        icon: "success",
        duration: 1000,
        complete: () => fetchData(),
      });
    } catch (error) {
      console.error("Failed to delete:", error);
      Taro.showToast({ title: "放生失败", icon: "none" });
    } finally {
      setShowDeleteModal(false);
      setDeletingItem(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setDeletingItem(null);
  };

  const getHappiness = (item: AnimalOrPlantItem) => {
    const hash = item.id
      .toString()
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash % 50) + 50;
  };

  const getProgressColor = (happiness: number) => {
    if (happiness >= 80) return "#EF4444";
    if (happiness >= 60) return "#F97316";
    if (happiness >= 40) return "#F59E0B";
    return "#94A3B8";
  };

  const getHeartEmoji = (happiness: number) => {
    if (happiness >= 80) return "❤️";
    if (happiness >= 60) return "🧡";
    if (happiness >= 40) return "💛";
    return "🤍";
  };

  if (loading) {
    return <SkeletonList count={5} />;
  }

  return (
    <View className="animal-plant-page">
      <View className="item-list">
        {items.map((item) => {
          const happiness = getHappiness(item);
          return (
            <View key={item.id} className="animal-item-card">
              <View className="animal-item-emoji-wrapper">
                <Text>{item.emoji}</Text>
              </View>
              <View className="animal-item-info">
                <View className="animal-item-name-row">
                  <Text className="animal-item-name">{item.name}</Text>
                  <Text className="animal-item-original-name">
                    （{item.original_name}）
                  </Text>
                </View>
                <View className="animal-item-progress-row">
                  <Text className="animal-item-heart">
                    {getHeartEmoji(happiness)}
                  </Text>
                  <View className="progress-bar">
                    <View
                      className="progress-fill"
                      style={{
                        width: `${happiness}%`,
                        backgroundColor: getProgressColor(happiness),
                      }}
                    />
                  </View>
                  <Text className="progress-text">{happiness}%</Text>
                </View>
              </View>
              <View className="animal-item-actions">
                <View className="action-btn" onClick={() => handleEdit(item)}>
                  <Text>✏️</Text>
                </View>
                <View
                  className="action-btn action-btn-delete"
                  onClick={() => handleDelete(item)}
                >
                  <Text>🗑️</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>

      {/* 编辑名称弹窗 */}
      <EditNameModal
        visible={showEditModal}
        name={editingItem?.name || ""}
        emoji={editingItem?.emoji || ""}
        onConfirm={handleEditConfirm}
        onCancel={handleEditCancel}
      />

      {/* 删除弹窗 */}
      <DeleteModal
        visible={showDeleteModal}
        name={deletingItem?.name || ""}
        emoji={deletingItem?.emoji || ""}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </View>
  );
}
