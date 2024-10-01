import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import settingsReducer, {
  setPinIcon,
  setPinColour,
  setPinSize,
  loadSettings,
} from "../settingsSlice"; // Adjust the import path as necessary
import { configureStore } from "@reduxjs/toolkit";

describe("settingsSlice", () => {
  const initialState = {
    pinIcon: "pin-outline" as keyof typeof Ionicons.glyphMap,
    pinColour: "red",
    pinSize: 30,
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous mocks
  });

  it("should load settings successfully", async () => {
    (AsyncStorage.getItem as jest.Mock)
      .mockResolvedValueOnce("pin-sharp") // For pinIcon
      .mockResolvedValueOnce("green") // For pinColour
      .mockResolvedValueOnce("50"); // For pinSize

    const store = configureStore({ reducer: { settings: settingsReducer } });
    await store.dispatch(loadSettings());

    const state = store.getState().settings;
    expect(state.pinIcon).toEqual("pin-sharp"); // Ensure this is a valid icon in Ionicons
    expect(state.pinColour).toEqual("green");
    expect(state.pinSize).toEqual(50);
  });

  it("should load default settings on error", async () => {
    (AsyncStorage.getItem as jest.Mock).mockRejectedValueOnce(
      new Error("Error loading")
    );

    const store = configureStore({ reducer: { settings: settingsReducer } });
    await store.dispatch(loadSettings());

    const state = store.getState().settings;
    expect(state.pinIcon).toEqual("pin-outline");
    expect(state.pinColour).toEqual("red");
    expect(state.pinSize).toEqual(30);
  });

  it("should return the initial state", () => {
    const result = settingsReducer(undefined, { type: "undefined" });
    expect(result).toEqual(initialState);
  });

  it("should handle setPinIcon", async () => {
    const newIcon = "pin-sharp"; // A valid icon from Ionicons
    const action = setPinIcon(newIcon);
    const result = settingsReducer(initialState, action);

    expect(result.pinIcon).toEqual(newIcon);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith("pinIcon", newIcon);
  });

  it("should handle setPinColour", async () => {
    const newColour = "blue";
    const action = setPinColour(newColour);
    const result = settingsReducer(initialState, action);

    expect(result.pinColour).toEqual(newColour);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith("pinColour", newColour);
  });

  it("should handle setPinSize", async () => {
    const newSize = 40;
    const action = setPinSize(newSize);
    const result = settingsReducer(initialState, action);

    expect(result.pinSize).toEqual(newSize);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "pinSize",
      JSON.stringify(newSize)
    );
  });
});
