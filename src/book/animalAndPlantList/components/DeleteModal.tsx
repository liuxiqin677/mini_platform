import { Text, View } from '@tarojs/components'
import './DeleteModal.css'

export interface DeleteModalProps {
  visible: boolean
  name: string
  emoji: string
  onConfirm: () => void
  onCancel: () => void
}

export default function DeleteModal({ visible, name, emoji, onConfirm, onCancel }: DeleteModalProps) {
  if (!visible) return null

  return (
    <View className="delete-modal-overlay" onClick={onCancel}>
      <View className="delete-modal-content" onClick={e => e.stopPropagation()}>
        <View className="delete-modal-emoji">
          <Text>{emoji}</Text>
        </View>
        <Text className="delete-modal-title">确认放生?</Text>
        <Text className="delete-modal-desc">确定要将 {name} 放归自然吗?</Text>
        <View className="delete-modal-actions">
          <View className="delete-modal-btn delete-modal-btn-cancel" onClick={onCancel}>
            <Text>取消</Text>
          </View>
          <View className="delete-modal-btn delete-modal-btn-confirm" onClick={onConfirm}>
            <Text>确认放生</Text>
          </View>
        </View>
      </View>
    </View>
  )
}