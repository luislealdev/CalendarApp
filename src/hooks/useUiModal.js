import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";
import { useCalendarStore } from "./useCalendarStore";

export const useUiModal = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((store) => store.ui);
  const { startCleaningActiveEvent } = useCalendarStore();

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
    dispatch(startCleaningActiveEvent());
  };

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
  };
};
