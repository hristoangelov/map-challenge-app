import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HeaderButton } from "./styles";

interface CustomHeaderButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: any;
}

export const CustomHeaderButton = ({
  iconName,
  onPress,
}: CustomHeaderButtonProps) => {
  return (
    <HeaderButton
      onPress={onPress}
      testID="header-button"
    >
      <Ionicons name={iconName} size={24} color={"#2c7df6"} />
    </HeaderButton>
  );
};
