import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const IconButton = styled(TouchableOpacity)`
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
`;

export const TickIcon = styled(View)`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: green;
  border-radius: 10px;
  padding: 3px;
`;

export const ColourButton = styled(TouchableOpacity)<{ colour: string }>`
  border: 1px solid black;
  border-radius: 25px;
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.colour};
`;
