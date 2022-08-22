import { useState } from "react";
import Modal from "react-modal";
import "./modalStyle.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h3>Modal Title</h3>
      <hr />
      <p>
        Adipisicing labore Lorem duis ad consectetur. Tempor sit fugiat proident
        do excepteur sint ipsum dolor enim quis Lorem eu aute excepteur.
        Voluptate enim esse voluptate exercitation minim sint. Culpa sunt veniam
        veniam sint exercitation proident ullamco in duis magna labore. Quis
        magna quis pariatur veniam.
      </p>
    </Modal>
  );
};
