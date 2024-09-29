import React from "react";
import { Platform } from "react-native";
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import { HomeWrapper, StyledMapView } from "./styles";

export const HomeScreen = () => {
  return (
    <HomeWrapper>
      <StyledMapView
        provider={
          Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
      ></StyledMapView>
    </HomeWrapper>
  );
};
