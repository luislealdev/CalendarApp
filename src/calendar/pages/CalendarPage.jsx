import { Navbar, CalendarEventBox, AddNewButton, DeleteFloatButton } from "../components";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { getMessages, calendarLocalizer } from "../../helpers";

import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useCalendarStore, useUiModal } from "../../hooks";


export const CalendarPage = () => {
  const { openDateModal } = useUiModal();
  const {events, setActiveEvent} = useCalendarStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return { style };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };
  
  const onSelect = (event) => {
    setActiveEvent(event)
  };

  const onChangeView = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        defaultView={lastView}
        culture="es"
        localizer={calendarLocalizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onChangeView}
      />
      <CalendarModal />
      <AddNewButton/>
      <DeleteFloatButton/>
    </>
  );
};
