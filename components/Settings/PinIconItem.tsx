import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButton } from "./styles";

interface PinIconItemProps {
  name: keyof typeof Ionicons.glyphMap;
}

export const PinIconItem = ({ name }: PinIconItemProps) => {
  return (
    <IconButton>
      <Ionicons name={name} size={40} />
    </IconButton>
  );
};
