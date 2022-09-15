import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [
      {
        _id: new Date().getTime(),
        title: "Luis Birthday",
        notes: "Have to buy the cake",
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: "#fafafa",
        user: {
          _id: "123",
          name: "Leal",
        },
      },
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) return payload;
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
