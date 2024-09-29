import React from "react";
import { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pin } from "../../types";

interface CustomMarkerProps {
  pin: Pin;
}

export const CustomMarker = ({ pin }: CustomMarkerProps) => {
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
      <Ionicons name={"pin-outline"} size={40} color={"red"} />
    </Marker>
  );
};
