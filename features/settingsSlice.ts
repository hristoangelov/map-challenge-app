import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SettingsState {
  pinIcon: keyof typeof Ionicons.glyphMap;
  pinColour: string;
  pinSize: number;
}

const initialState: SettingsState = {
  pinIcon: "pin-outline",
  pinColour: "red",
  pinSize: 30,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPinIcon: (
      state,
      action: PayloadAction<keyof typeof Ionicons.glyphMap>
    ) => {
      state.pinIcon = action.payload;
    },
    setPinColour: (state, action: PayloadAction<string>) => {
      state.pinColour = action.payload;
    },
    setPinSize: (state, action: PayloadAction<number>) => {
      state.pinSize = action.payload;
    },
  },
});

export const { setPinIcon, setPinColour, setPinSize } = settingsSlice.actions;

export default settingsSlice.reducer;
