import React from "react";
import { ActivityIndicator, Text, Platform, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Region } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNetInfo } from "@react-native-community/netinfo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  HomeWrapper,
  StyledMapView,
  NoInternetConnectionAlert,
  AlertText,
} from "./styles";
import { Connector, Pin } from "../../types";
import { CustomMarker, PinBottomSheet } from "../../components/Home";
import { loadSettings } from "../../features/settingsSlice";
import { AppDispatch, RootState } from "../../app/store";
import { isPinWithinBounds } from "../../utils";

export const HomeScreen = () => {
  const [data, setData] = React.useState<Pin[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [asyncMarkers, setAsyncMarkers] = React.useState<[]>([]);
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
  const connectorTypes = useSelector(
    (state: RootState) => state.filter.connectorTypes
  );
  const connectorStatuses = useSelector(
    (state: RootState) => state.filter.connectorStatuses
  );
  const netInfo = useNetInfo();

  React.useLayoutEffect(() => {
    dispatch(loadSettings());
  }, [dispatch]);

  React.useEffect(() => {
    const getAsyncItems = async () => {
      try {
        let newData: string | null = "";
        newData = await AsyncStorage.getItem("filtered-markers");
        newData && setAsyncMarkers(JSON.parse(newData));
      } catch (error) {
        console.error("Failed to get data:", error);
      }
    };

    getAsyncItems();

    fetch("http://localhost:3000/pins")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response failed");
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
    const filtered = data.filter((pin) => isPinWithinBounds(pin, mapRegion));
    return filtered.filter((pin) => {
      return pin.connectors.some((connector: Connector) => {
        const matchesConnectorType =
          connectorTypes.length === 0 ||
          connectorTypes.includes(connector.type);

        const matchesConnectorStatus =
          connectorStatuses.length === 0 ||
          connectorStatuses.includes(connector.status);
        return matchesConnectorType && matchesConnectorStatus;
      });
    });
  }, [data, mapRegion, connectorTypes, connectorStatuses]);

  React.useEffect(() => {
    const setMarkers = async () => {
      await AsyncStorage.setItem(
        "filtered-markers",
        JSON.stringify(filteredMarkers)
      );
    };
    filteredMarkers && setMarkers();
  }, [filteredMarkers]);

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
      {!netInfo && (
        <NoInternetConnectionAlert>
          <Ionicons name="alert-circle-outline" size={21} />
          <AlertText>
            No internet connection. Information might be outdated.
          </AlertText>
        </NoInternetConnectionAlert>
      )}
      <StyledMapView
        provider={
          Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        initialRegion={initialRegion}
        onRegionChangeComplete={(region) => setMapRegion(region)}
      >
        {(filteredMarkers && filteredMarkers.length > 0
          ? filteredMarkers
          : asyncMarkers
        ).map((pin: Pin, index: React.Key) => (
          <CustomMarker key={index} pin={pin} onPress={() => onPinPress(pin)} />
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
