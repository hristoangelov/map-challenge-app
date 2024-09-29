import { Dimensions, View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components";

export const HomeWrapper = styled(View)`
  flex: 1;
`;

export const StyledMapView = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;