import React from "react";
import { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pin } from "../../types";
import { RootState } from "../../app/store";

interface CustomMarkerProps {
  pin: Pin;
}

export const CustomMarker = ({ pin }: CustomMarkerProps) => {
  const pinColour = useSelector((state: RootState) => state.settings.pinColour);
  const pinIcon = useSelector((state: RootState) => state.settings.pinIcon);
  const pinSize = useSelector((state: RootState) => state.settings.pinSize);

  return (
    <Marker
      coordinate={{
        latitude: parseFloat(pin.latitude),
        longitude: parseFloat(pin.longitude),
      }}
      // title={pin.title}
      // description="I am here"
      onPress={() => console.log("---here")}
    >
      <Ionicons name={pinIcon} size={pinSize} color={pinColour} />
    </Marker>
  );
};
