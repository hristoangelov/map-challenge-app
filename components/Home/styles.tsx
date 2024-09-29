import { TouchableOpacity, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";

export const HeaderButton = styled(TouchableOpacity)<{
  isRightButton: boolean;
}>`
  margin-${(props) => (props.isRightButton ? "right" : "left")}: 12px;
`;

export const BottomSheetWrapper = styled(ScrollView)`
  margin: 4px 12px 12px 12px;
`;

export const StyledTitle = styled(Text)<{ isCentered?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  ${(props) => props.isCentered && "text-align: center"}
`;

export const TypeStatusWrapper = styled(View)`
  flex-direction: row;
`;

export const TypeStatusText = styled(Text)<{ isAvailable: boolean }>`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${(props) => (props.isAvailable ? "green" : "red")};
`;
