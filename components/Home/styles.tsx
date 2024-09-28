import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const HeaderButton = styled(TouchableOpacity)<{ isRightButton: boolean }>`
  margin-${(props) => (props.isRightButton ? "right" : "left")}: 12px;
`;