import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomHeaderButton } from "../CustomHeaderButton";

describe("CustomHeaderButton", () => {
  it("renders correctly with the given icon", () => {
    const { getByTestId } = render(<CustomHeaderButton iconName="search" />);
    const button = getByTestId("header-button");
    expect(button).toBeTruthy();

    const icon = button.findByType(Ionicons);
    expect(icon.props.name).toBe("search");
  });

  it("calls onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CustomHeaderButton iconName="search" onPress={onPressMock} />
    );

    const button = getByTestId("header-button");

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
