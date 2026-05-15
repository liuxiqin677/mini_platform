import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.css";

export interface IANButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "ghost"
    | "soft"
    | "link"
    | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  onClick?: () => void;
}

const ANButton = (props: IANButtonProps) => {
  const {
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    rounded = false,
    onClick,
  } = props;

  return (
    <View
      className={`an-button an-button--${variant} an-button--${size} ${disabled ? "an-button--disabled" : ""} ${loading ? "an-button--loading" : ""} ${rounded ? "an-button--rounded" : ""}`}
      onClick={() => !disabled && !loading && onClick?.()}
    >
      {loading && (
        <View className="an-button__loading">
          <Text className="an-button__loading-icon">◐</Text>
        </View>
      )}
      <Text className="an-button__text">{children}</Text>
    </View>
  );
};

export default ANButton;
