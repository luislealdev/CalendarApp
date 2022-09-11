import { useSelector } from "react-redux";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((store) => store.calendar);
  return {
    //*Properties
    events,
    activeEvent
    //*Methods
  };
};
