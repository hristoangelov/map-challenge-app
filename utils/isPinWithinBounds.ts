import { Region } from "react-native-maps";
import { Pin } from "../types";

export const isPinWithinBounds = (pin: Pin, region: Region) => {
  const lat = parseFloat(pin.latitude);
  const lng = parseFloat(pin.longitude);

  const latInRange =
    lat >= region.latitude - region.latitudeDelta / 2 &&
    lat <= region.latitude + region.latitudeDelta / 2;

  const lngInRange =
    lng >= region.longitude - region.longitudeDelta / 2 &&
    lng <= region.longitude + region.longitudeDelta / 2;

  return latInRange && lngInRange;
};
