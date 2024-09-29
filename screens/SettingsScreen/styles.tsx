import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

export const SettingsWrapper = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
  padding: 24px 12px;
`;

export const Subheader = styled(Text)<{ isFirst?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: ${(props) => (props.isFirst ? "0" : "12")}px;
`;

export const SelectorRow = styled(View)<{ isLastRow?: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.isLastRow ? "16" : "12")}px;
  margin-horizontal: 12px;
`;

export const StyledIcon = styled(Ionicons)`
  text-align: center;
  margin-bottom: 8px;
`;
