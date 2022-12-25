import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import {
  onAddNewEvent,
  onDeleteEvent,
  onNotActiveEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((store) => store.calendar);
  const { user } = useSelector((store) => store.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: Llegar al backend
    //Update event
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Create event
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };
  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };
  const startCleaningActiveEvent = () => {
    dispatch(onNotActiveEvent());
  };

  return {
    //*Properties
    events,
    activeEvent,
    hasSelectedEvent: !!activeEvent,
    //*Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startCleaningActiveEvent,
  };
};
