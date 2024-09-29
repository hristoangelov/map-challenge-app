import Checkbox from "expo-checkbox";
import { View, Text } from "react-native";
import styled from "styled-components";

export const RightDrawerWrapper = styled(View)`
  flex: 1;
  padding: 60px 12px 12px 12px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const OptionsWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
`;

export const FilterItem = styled(Text)`
  padding-left: 8px;
  font-size: 16px;
`;

export const Subtitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledCheckbox = styled(Checkbox)`
  height: 24px;
  width: 24px;
`;
