import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TickIcon, ColourButton } from "./styles";
import { AppDispatch, RootState } from "../../app/store";
import { setPinColour } from "../../features/settingsSlice";

interface PinColourItemProps {
  colour: string;
}

export const PinColourItem = ({ colour }: PinColourItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const pinColour = useSelector((state: RootState) => state.settings.pinColour);

  return (
      <ColourButton
        colour={colour}
        onPress={() => dispatch(setPinColour(colour))}
      >
      {colour === pinColour && (
        <TickIcon>
          <Ionicons name="checkmark" size={12} color="white" />
        </TickIcon>
      )}
    </ColourButton>
  );
};
