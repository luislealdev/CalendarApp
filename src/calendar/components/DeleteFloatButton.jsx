import React from "react";
import { useCalendarStore, useUiModal } from "../../hooks";
import "./styles.css";

export const DeleteFloatButton = () => {
  const { startDeletingEvent, hasSelectedEvent } = useCalendarStore();
  const { isDateModalOpen } = useUiModal();

  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{ display: hasSelectedEvent && !isDateModalOpen ? "" : "none" }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
};
