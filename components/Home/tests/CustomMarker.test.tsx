import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { CustomMarker } from "../CustomMarker";
import { Pin } from "../../../types";
import settingsReducer from "../../../features/settingsSlice";

const mockStore = (state = {}) => {
  return configureStore({
    reducer: {
      settings: settingsReducer,
    },
    preloadedState: state,
  });
};

describe("CustomMarker", () => {
  const mockPin: Pin = {
    title: "Test Marker",
    latitude: "37.78825",
    longitude: "-122.4324",
    connectors: [],
  };

  it("renders correctly with the given pin", () => {
    const store = mockStore({
      settings: {
        pinColour: "#2c7df6",
        pinIcon: "search",
        pinSize: 24,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <CustomMarker pin={mockPin} onPress={() => {}} />
      </Provider>
    );

    const marker = getByTestId("marker");
    expect(marker).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const store = mockStore({
      settings: {
        pinColour: "#2c7df6",
        pinIcon: "search",
        pinSize: 24,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <CustomMarker pin={mockPin} onPress={onPressMock} />
      </Provider>
    );

    const button = getByTestId("marker");
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
