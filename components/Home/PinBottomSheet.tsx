import React from "react";
import { ConnectorStatus, Pin } from "../../types";
import {
  BottomSheetWrapper,
  StyledTitle,
  TypeStatusWrapper,
  TypeStatusText,
} from "./styles";

interface PinBottomSheetProps {
  pin: Pin | undefined;
}

export const PinBottomSheet = ({ pin }: PinBottomSheetProps) => {
  return (
    <BottomSheetWrapper>
      <StyledTitle isCentered={true}>{pin?.title}</StyledTitle>
      <StyledTitle isCentered={true}>
        ({pin?.latitude}, {pin?.longitude})
      </StyledTitle>
      {pin?.connectors?.map((item, index) => (
        <TypeStatusWrapper key={index}>
          <StyledTitle>{item.type}</StyledTitle>
          <StyledTitle> - </StyledTitle>
          <TypeStatusText
            isAvailable={item.status === ConnectorStatus.Available}
          >
            {item.status}
          </TypeStatusText>
        </TypeStatusWrapper>
      ))}
    </BottomSheetWrapper>
  );
};
