import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButton, TickIcon } from "./styles";
import { AppDispatch, RootState } from "../../app/store";
import { setPinIcon } from "../../features/settingsSlice";

interface PinIconItemProps {
  name: keyof typeof Ionicons.glyphMap;
}

export const PinIconItem = ({ name }: PinIconItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const pinIcon = useSelector((state: RootState) => state.settings.pinIcon);

  return (
    <IconButton onPress={() => dispatch(setPinIcon(name))} testID="icon-button">
      <Ionicons name={name} size={40} />
      {name === pinIcon && (
        <TickIcon testID="tick-icon">
          <Ionicons name="checkmark" size={12} color="white" />
        </TickIcon>
      )}
    </IconButton>
  );
};
