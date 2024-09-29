import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HeaderButton } from "./styles";

interface CustomHeaderButtonProps {
  isRightButton: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: any;
}

export const CustomHeaderButton = ({
  isRightButton,
  iconName,
  onPress,
}: CustomHeaderButtonProps) => {
  return (
    <HeaderButton isRightButton={isRightButton} onPress={onPress}>
      <Ionicons name={iconName} size={24} color={"#2c7df6"} />
    </HeaderButton>
  );
};
