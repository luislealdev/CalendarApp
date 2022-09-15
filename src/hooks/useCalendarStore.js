import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((store) => store.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };
  const startSavingEvent = async (event) => {
    //TODO: Llegar al backend

    if (event._id) {
      dispatch(onUpdateEvent({ ...event }));
    } else {
      dispatch(onAddNewEvent({ ...event, _id: new Date().getTime() }));
    }
  };

  return {
    //*Properties
    events,
    activeEvent,
    //*Methods
    setActiveEvent,
    startSavingEvent,
  };
};
