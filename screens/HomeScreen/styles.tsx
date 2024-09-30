import { Dimensions, View, Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components";

export const HomeWrapper = styled(View)`
  flex: 1;
`;

export const StyledMapView = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const NoInternetConnectionAlert = styled(View)`
  flex-wrap: wrap;
  height: 40px;
  background-color: salmon;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 4px;
`;

export const AlertText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  padding-left: 4px;
`;

export const ActivityIndicatorWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
`;
