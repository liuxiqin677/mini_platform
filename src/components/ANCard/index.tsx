import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.css";

export interface IANCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function ANCard(props: IANCardProps) {
  const {
    title,
    subtitle,
    children,
    variant = "default",
    padding = "md",
  } = props;

  return (
    <View className={`an-card an-card--${variant} an-card--p-${padding}`}>
      {(title || subtitle) && (
        <View className="an-card__header">
          {title && <Text className="an-card__title">{title}</Text>}
          {subtitle && <Text className="an-card__subtitle">{subtitle}</Text>}
        </View>
      )}
      {children && <View className="an-card__content">{children}</View>}
    </View>
  );
}