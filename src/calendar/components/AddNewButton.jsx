import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore, useUiModal } from "../../hooks";
import "./styles.css";

export const AddNewButton = () => {
  const { setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiModal();

  const handleNewEvent = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Leal",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleNewEvent}>
      <i className="fas fa-plus" />
    </button>
  );
};
