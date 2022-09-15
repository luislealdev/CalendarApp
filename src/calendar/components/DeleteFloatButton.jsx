import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore } from "../../hooks";
import "./styles.css";

export const DeleteFloatButton = () => {
  const { startDeletingEvent, hasSelectedEvent } = useCalendarStore();
  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{ display: hasSelectedEvent ? "" : "none" }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
};
