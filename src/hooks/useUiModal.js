import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiModal = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((store) => store.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
  };
};
