import React from "react";
import { ActivityIndicator, Text, Platform } from "react-native";
import {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
  Region,
} from "react-native-maps";
import { HomeWrapper, StyledMapView } from "./styles";
import { Pin } from "../../types";

export const HomeScreen = () => {
  const [data, setData] = React.useState<Pin[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const initialRegion: Region = {
    latitude: 42.7339,
    longitude: 25.4858,
    latitudeDelta: 5.0,
    longitudeDelta: 5.0,
  };
  const [mapRegion, setMapRegion] = React.useState<Region>(
    initialRegion
  );

  React.useEffect(() => {
    fetch("http://localhost:3000/pins")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const isPinWithinBounds = React.useCallback((pin: Pin, region: Region) => {
    const lat = parseFloat(pin.latitude);
    const lng = parseFloat(pin.longitude);

    const latInRange =
      lat >= region.latitude - region.latitudeDelta / 2 &&
      lat <= region.latitude + region.latitudeDelta / 2;

    const lngInRange =
      lng >= region.longitude - region.longitudeDelta / 2 &&
      lng <= region.longitude + region.longitudeDelta / 2;

    return latInRange && lngInRange;
  }, []);

  const filteredMarkers = React.useMemo(() => {
    if (!data || !mapRegion) return [];
    return data.filter((pin) => isPinWithinBounds(pin, mapRegion));
  }, [data, mapRegion, isPinWithinBounds]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <HomeWrapper>
      <StyledMapView
        provider={
          Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        initialRegion={initialRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
      >
        {filteredMarkers &&
          filteredMarkers.map((pin, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(pin.latitude),
                longitude: parseFloat(pin.longitude),
              }}
              // title={pin.title}
              // description="I am here"
              onPress={() => console.log("---here")}
            />
          ))}
      </StyledMapView>
    </HomeWrapper>
  );
};
