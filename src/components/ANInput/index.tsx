import { Input, Text, View } from "@tarojs/components";
import { useState } from "react";
import "./index.css";

export interface IANInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function ANInput(props: IANInputProps) {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <View className="an-input-search-box">
      <Text className="an-input-search-icon">🔍</Text>
      <Input
        className="an-input-search-input"
        placeholder={props.placeholder || "搜索宠物..."}
        value={searchText}
        onInput={(e) => {
          setSearchText(e.detail?.value || "");
          props.onSearch?.(e.detail?.value || "");
        }}
      />
    </View>
  );
}
