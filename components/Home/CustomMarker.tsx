import React from "react";
import { TouchableOpacity } from "react-native";
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
  const [opacity, setOpacity] = React.useState(1);
  const pinColour = useSelector((state: RootState) => state.settings.pinColour);
  const pinIcon = useSelector((state: RootState) => state.settings.pinIcon);
  const pinSize = useSelector((state: RootState) => state.settings.pinSize);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setOpacity(0.3)}
      onPressOut={() => setOpacity(1)}
      testID="marker"
    >
      <Marker
        coordinate={{
          latitude: parseFloat(pin.latitude),
          longitude: parseFloat(pin.longitude),
        }}
        opacity={opacity}
      >
        <Ionicons name={pinIcon} size={pinSize} color={pinColour} />
      </Marker>
    </TouchableOpacity>
  );
};
