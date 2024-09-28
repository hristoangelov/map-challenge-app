import React from "react";
import { Dimensions, Platform, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import styled from "styled-components";

const HomeWrapper = styled(View)`
  flex: 1;
`;

const StyledMapView = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const Home = () => {
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
