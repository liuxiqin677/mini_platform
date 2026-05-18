import { Input, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect, useRef, useState } from 'react'
import './EditNameModal.css'

export interface EditNameModalProps {
  visible: boolean
  name: string
  emoji: string
  onConfirm: (newName: string) => void
  onCancel: () => void
}

export default function EditNameModal({ visible, name, emoji, onConfirm, onCancel }: EditNameModalProps) {
  const [inputValue, setInputValue] = useState(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (visible) {
      setInputValue(name)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [visible, name])

  const handleConfirm = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) {
      Taro.showToast({ title: '请输入名称', icon: 'none' })
      return
    }
    if (trimmed.length > 20) {
      Taro.showToast({ title: '名称不能超过20个字符', icon: 'none' })
      return
    }
    onConfirm(trimmed)
  }

  const handleCancel = () => {
    setInputValue(name)
    onCancel()
  }

  if (!visible) return null

  return (
    <View className="edit-modal-overlay" onClick={handleCancel}>
      <View className="edit-modal-content" onClick={e => e.stopPropagation()}>
        <View className="edit-modal-header">
          <Text className="edit-modal-emoji">{emoji}</Text>
        </View>
        <View className="edit-modal-input-wrapper">
          <Input
            ref={inputRef}
            className="edit-modal-input"
            value={inputValue}
            onInput={e => setInputValue(e.detail.value)}
            placeholder="请输入名称"
            maxlength={20}
          />
        </View>
        <View className="edit-modal-actions">
          <View className="edit-modal-btn edit-modal-btn-cancel" onClick={handleCancel}>
            <Text>✕</Text>
          </View>
          <View className="edit-modal-btn edit-modal-btn-confirm" onClick={handleConfirm}>
            <Text>✓</Text>
          </View>
        </View>
      </View>
    </View>
  )
}