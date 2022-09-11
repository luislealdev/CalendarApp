import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar";
import { uiSlice } from "./ui";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
});
