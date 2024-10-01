import React from "react";
import { render } from "@testing-library/react-native";
import { PinBottomSheet } from "../PinBottomSheet";
import { ConnectorStatus, ConnectorType, Pin } from "../../../types";

const mockPin: Pin = {
  title: "Test Pin",
  latitude: "40.748817",
  longitude: "-73.985428",
  connectors: [
    { type: ConnectorType.CCS2, status: ConnectorStatus.Available },
    { type: ConnectorType.Type3, status: ConnectorStatus.Unavailable },
  ],
};

describe("PinBottomSheet", () => {
  it("renders correctly when pin data is passed", () => {
    const { getByText } = render(<PinBottomSheet pin={mockPin} />);

    expect(getByText("Test Pin")).toBeTruthy();
    expect(getByText("(40.748817, -73.985428)")).toBeTruthy();

    expect(getByText(ConnectorType.CCS2)).toBeTruthy();
    expect(getByText(ConnectorType.Type3)).toBeTruthy();

    expect(getByText(ConnectorStatus.Available)).toBeTruthy();
    expect(getByText(ConnectorStatus.Unavailable)).toBeTruthy();
  });

  it("renders correctly without pin data", () => {
    const { queryByText } = render(<PinBottomSheet pin={undefined} />);

    expect(queryByText("Test Pin")).toBeNull();
    expect(queryByText("(40.748817, -73.985428)")).toBeNull();
  });

  it("renders connector status with correct color based on availability", () => {
    const { getByText } = render(<PinBottomSheet pin={mockPin} />);

    const availableStatus = getByText(ConnectorStatus.Available);
    const occupiedStatus = getByText(ConnectorStatus.Unavailable);

    expect(availableStatus.props.isAvailable).toBe(true);
    expect(occupiedStatus.props.isAvailable).toBe(false);
  });
});
