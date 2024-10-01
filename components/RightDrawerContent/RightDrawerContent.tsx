import React from "react";
import {
  RightDrawerWrapper,
  Title,
  OptionsWrapper,
  FilterItem,
  Subtitle,
  StyledCheckbox,
  ApplyButton,
  ButtonText,
} from "./styles";
import { ConnectorStatus, ConnectorType } from "../../types";

export const RightDrawerContent = ({ onPress }: any) => {
  const [connectorTypes, setConnectorTypes] = React.useState<string[]>([]);
  const [connectorStatuses, setConnectorStatuses] = React.useState<string[]>(
    []
  );

  const handleCheckboxChange = (setConnector: any, value: string) => {
    setConnector((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <RightDrawerWrapper>
      <Title>Filter</Title>
      <Subtitle>Connector Types:</Subtitle>
      {Object.entries(ConnectorType).map(([key, value]) => (
        <OptionsWrapper key={key}>
          <StyledCheckbox
            testID={`checkbox-${key}`}
            value={connectorTypes.includes(value)}
            onValueChange={() => handleCheckboxChange(setConnectorTypes, value)}
          />
          <FilterItem>{value}</FilterItem>
        </OptionsWrapper>
      ))}
      <Subtitle>Connector Statuses:</Subtitle>
      {Object.entries(ConnectorStatus).map(([key, value]) => (
        <OptionsWrapper key={key}>
          <StyledCheckbox
            value={connectorStatuses.includes(value)}
            onValueChange={() =>
              handleCheckboxChange(setConnectorStatuses, value)
            }
          />
          <FilterItem>{value}</FilterItem>
        </OptionsWrapper>
      ))}
      <ApplyButton onPress={() => onPress(connectorTypes, connectorStatuses)}>
        <ButtonText>Apply</ButtonText>
      </ApplyButton>
    </RightDrawerWrapper>
  );
};
