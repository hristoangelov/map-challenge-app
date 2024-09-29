import React from "react";
import Checkbox from "expo-checkbox";
import {
  RightDrawerWrapper,
  Title,
  OptionsWrapper,
  FilterItem,
  Subtitle,
  StyledCheckbox,
} from "./styles";
import { ConnectorStatus, ConnectorType } from "../../types";

type FilterKeys = "type2" | "type3";

export const RightDrawerContent = () => {
  const [connectorTypes, setConnectorTypes] = React.useState<
    Record<string, boolean>
  >({});
  const [connectorStatuses, setConnectorStatuses] = React.useState<
    Record<string, boolean>
  >({});

  return (
    <RightDrawerWrapper>
      <Title>Filter</Title>
      <Subtitle>Connector Types:</Subtitle>
      {Object.entries(ConnectorType).map(([key, value]) => (
        <OptionsWrapper key={key}>
          <StyledCheckbox
            value={connectorTypes[value] || false}
            onValueChange={() =>
              setConnectorTypes((prev) => ({
                ...prev,
                [value]: !prev[value],
              }))
            }
          />
          <FilterItem>{value}</FilterItem>
        </OptionsWrapper>
      ))}
      <Subtitle>Connector Statuses:</Subtitle>
      {Object.entries(ConnectorStatus).map(([key, value]) => (
        <OptionsWrapper key={key}>
          <StyledCheckbox
            value={connectorStatuses[value] || false}
            onValueChange={() =>
              setConnectorStatuses((prev) => ({
                ...prev,
                [value]: !prev[value],
              }))
            }
          />
          <FilterItem>{value}</FilterItem>
        </OptionsWrapper>
      ))}
    </RightDrawerWrapper>
  );
};
