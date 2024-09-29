import React from "react";
import { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pin } from "../../types";
import { RootState } from "../../app/store";

interface CustomMarkerProps {
  pin: Pin;
  onPress: () => void;
}

export const CustomMarker = ({ pin, onPress }: CustomMarkerProps) => {
  const pinColour = useSelector((state: RootState) => state.settings.pinColour);
  const pinIcon = useSelector((state: RootState) => state.settings.pinIcon);
  const pinSize = useSelector((state: RootState) => state.settings.pinSize);

  return (
    <Marker
      coordinate={{
        latitude: parseFloat(pin.latitude),
        longitude: parseFloat(pin.longitude),
      }}
      onPress={onPress}
    >
      <Ionicons name={pinIcon} size={pinSize} color={pinColour} />
    </Marker>
  );
};
