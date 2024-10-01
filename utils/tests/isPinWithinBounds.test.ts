import { Region } from "react-native-maps";
import { isPinWithinBounds } from "../isPinWithinBounds";
import { Pin } from "../../types";

describe("isPinWithinBounds", () => {
  const region: Region = {
    latitude: 40.73061,
    longitude: -73.935242,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  it("should return true if the pin is within bounds", () => {
    const pin: Pin = {
      latitude: "40.73061",
      longitude: "-73.935242",
      title: "Test Pin",
      connectors: [],
    };

    const result = isPinWithinBounds(pin, region);
    expect(result).toBe(true);
  });

  it("should return false if the pin is outside latitude bounds", () => {
    const pin: Pin = {
      latitude: "41.73061",
      longitude: "-73.935242",
      title: "Test Pin",
      connectors: [],
    };

    const result = isPinWithinBounds(pin, region);
    expect(result).toBe(false);
  });

  it("should return false if the pin is outside longitude bounds", () => {
    const pin: Pin = {
      latitude: "40.73061",
      longitude: "-74.935242",
      title: "Test Pin",
      connectors: [],
    };

    const result = isPinWithinBounds(pin, region);
    expect(result).toBe(false);
  });

  it("should return false if the pin is outside both latitude and longitude bounds", () => {
    const pin: Pin = {
      latitude: "41.73061",
      longitude: "-74.935242",
      title: "Test Pin",
      connectors: [],
    };

    const result = isPinWithinBounds(pin, region);
    expect(result).toBe(false);
  });
});
