import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const loadSettings = createAsyncThunk<SettingsState>(
  "settings/loadSettings",
  async () => {
    try {
      const pinIcon = await AsyncStorage.getItem("pinIcon");
      const pinColour = await AsyncStorage.getItem("pinColour");
      const pinSize = await AsyncStorage.getItem("pinSize");

      return {
        pinIcon: (pinIcon as keyof typeof Ionicons.glyphMap) || "pin-outline",
        pinColour: pinColour || "red",
        pinSize: pinSize ? parseInt(pinSize) : 30,
      };
    } catch (error) {
      console.error(error);
      return initialState;
    }
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPinIcon: (
      state,
      action: PayloadAction<keyof typeof Ionicons.glyphMap>
    ) => {
      state.pinIcon = action.payload;
      AsyncStorage.setItem("pinIcon", action.payload);
    },
    setPinColour: (state, action: PayloadAction<string>) => {
      state.pinColour = action.payload;
      AsyncStorage.setItem("pinColour", action.payload);
    },
    setPinSize: (state, action: PayloadAction<number>) => {
      state.pinSize = action.payload;
      AsyncStorage.setItem("pinSize", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadSettings.fulfilled,
      (state, action: PayloadAction<SettingsState>) => {
        state.pinIcon = action.payload.pinIcon;
        state.pinColour = action.payload.pinColour;
        state.pinSize = action.payload.pinSize;
      }
    );
  },
});

export const { setPinIcon, setPinColour, setPinSize } = settingsSlice.actions;

export default settingsSlice.reducer;
