import React from "react";
import Slider from "@react-native-community/slider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PinIconItem } from "../../components/Settings";
import {
  SettingsWrapper,
  Subheader,
  SelectorRow,
  StyledIcon,
  ColourButton,
} from "./styles";

export const SettingsScreen = () => {
  const [sizeValue, setSizeValue] = React.useState<number>(30);
  const [iconName, setIconName] =
    React.useState<keyof typeof Ionicons.glyphMap>("pin-outline");

  return (
    <SettingsWrapper>
      <Subheader isFirst={true}>Select Pin Icon:</Subheader>
      <SelectorRow>
        <PinIconItem name={"pin-outline"} />
        <PinIconItem name={"navigate-outline"} />
        <PinIconItem name={"man-outline"} />
        <PinIconItem name={"information-outline"} />
      </SelectorRow>
      <SelectorRow isLastRow={true}>
        <PinIconItem name={"alert-outline"} />
        <PinIconItem name={"checkmark-outline"} />
        <PinIconItem name={"attach-outline"} />
        <PinIconItem name={"information-circle-outline"} />
      </SelectorRow>
      <Subheader>Select Pin Colour:</Subheader>
      <SelectorRow>
        <ColourButton colour={"black"} />
        <ColourButton colour={"white"} />
        <ColourButton colour={"blue"} />
        <ColourButton colour={"orange"} />
      </SelectorRow>
      <SelectorRow isLastRow={true}>
        <ColourButton colour={"cyan"} />
        <ColourButton colour={"lightcoral"} />
        <ColourButton colour={"purple"} />
        <ColourButton colour={"red"} />
      </SelectorRow>
      <Subheader>Select Pin Size:</Subheader>
      <StyledIcon name={iconName} size={sizeValue} color={"red"} />
      <Slider
        minimumValue={30}
        maximumValue={70}
        step={1}
        onValueChange={(e) => setSizeValue(e)}
      />
    </SettingsWrapper>
  );
};
