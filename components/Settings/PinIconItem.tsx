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
    <IconButton>
      <Ionicons
        name={name}
        size={40}
        onPress={() => dispatch(setPinIcon(name))}
      />
      {name === pinIcon && (
        <TickIcon>
          <Ionicons name="checkmark" size={12} color="white" />
        </TickIcon>
      )}
    </IconButton>
  );
};
