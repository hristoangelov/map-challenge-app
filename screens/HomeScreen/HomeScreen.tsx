import React from "react";
import { ActivityIndicator, Text, Platform, View } from "react-native";
import { useDispatch } from "react-redux";
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Region } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";

import { HomeWrapper, StyledMapView } from "./styles";
import { Pin } from "../../types";
import { CustomMarker, PinBottomSheet } from "../../components/Home";
import { loadSettings } from "../../features/settingsSlice";
import { AppDispatch } from "../../app/store";
import { isPinWithinBounds } from "../../utils";

export const HomeScreen = () => {
  const [data, setData] = React.useState<Pin[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [selectedPin, setSelectedPin] = React.useState<Pin>();
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const initialRegion: Region = {
    latitude: 42.7339,
    longitude: 25.4858,
    latitudeDelta: 5.0,
    longitudeDelta: 5.0,
  };
  const [mapRegion, setMapRegion] = React.useState<Region>(initialRegion);
  const dispatch = useDispatch<AppDispatch>();

  React.useLayoutEffect(() => {
    dispatch(loadSettings());
  }, [dispatch]);

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

  const filteredMarkers = React.useMemo(() => {
    if (!data || !mapRegion) return [];
    return data.filter((pin) => isPinWithinBounds(pin, mapRegion));
  }, [data, mapRegion]);

  const onPinPress = (pin: Pin) => {
    bottomSheetRef.current?.expand();
    setSelectedPin(pin);
  };

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
            <CustomMarker
              key={index}
              pin={pin}
              onPress={() => onPinPress(pin)}
            />
          ))}
      </StyledMapView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["50%"]}
        enablePanDownToClose={true}
      >
        <PinBottomSheet pin={selectedPin} />
      </BottomSheet>
    </HomeWrapper>
  );
};
