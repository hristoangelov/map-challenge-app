import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@react-native-community/slider";
import { SettingsWrapper, Subheader, SelectorRow, StyledIcon } from "./styles";
import { PinColourItem, PinIconItem } from "../../components/Settings";
import { AppDispatch, RootState } from "../../app/store";
import { setPinSize } from "../../features/settingsSlice";

export const SettingsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pinIcon = useSelector((state: RootState) => state.settings.pinIcon);
  const pinColour = useSelector((state: RootState) => state.settings.pinColour);
  const pinSize = useSelector((state: RootState) => state.settings.pinSize);

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
        <PinColourItem colour={"black"} />
        <PinColourItem colour={"red"} />
        <PinColourItem colour={"blue"} />
        <PinColourItem colour={"orange"} />
      </SelectorRow>
      <SelectorRow isLastRow={true}>
        <PinColourItem colour={"cyan"} />
        <PinColourItem colour={"lightcoral"} />
        <PinColourItem colour={"purple"} />
        <PinColourItem colour={"grey"} />
      </SelectorRow>
      <Subheader>Select Pin Size:</Subheader>
      <StyledIcon name={pinIcon} size={pinSize} color={pinColour} />
      <Slider
        minimumValue={30}
        maximumValue={70}
        step={1}
        value={pinSize || 30}
        onValueChange={(size) => dispatch(setPinSize(size))}
      />
    </SettingsWrapper>
  );
};
