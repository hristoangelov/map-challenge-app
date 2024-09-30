import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
