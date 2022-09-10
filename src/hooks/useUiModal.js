import { useDispatch, useSelector } from "react-redux";

export const useUiModal = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((store) => store.ui);

  const onOpenDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const onCloseDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return {
    isDateModalOpen,
    onOpenDateModal,
    onCloseDateModal,
  };
};
