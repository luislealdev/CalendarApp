import { useEffect, useMemo, useState } from "react";

import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";

import es from "date-fns/locale/es";
registerLocale("es", es);

import "./modalStyle.css";
import "react-datepicker/dist/react-datepicker.css";
import { addHours, addMinutes, differenceInSeconds } from "date-fns";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useCalendarStore, useUiModal } from "../../hooks";

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
  const { activeEvent } = useCalendarStore();

  const { isDateModalOpen, closeDateModal } = useUiModal();

  const [formValues, setFormValues] = useState({
    title: "Luis",
    notes: "Leal",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  useEffect(() => {
    if(activeEvent !== null){
      setFormValues({...activeEvent});
    }
  }, [activeEvent])
  

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (newDate, changing) => {
    setFormValues({
      ...formValues,
      [changing]: newDate,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);

    const dateDifference = differenceInSeconds(
      formValues.end,
      formValues.start
    );

    if (isNaN(dateDifference) || dateDifference <= 0) {
      Swal.fire("Fechas incorrectas", "Revise las fechas ingresadas", "error");
      return;
    }

    if (formValues.title.length <= 0) return;
  };

  const [formSubmited, setFormSubmited] = useState(false);

  const titleClass = useMemo(() => {
    if (!formSubmited) return "";

    return formValues.title.length > 0 ? "is-valid" : "is-invalid";
  }, [formValues.title, formSubmited]);

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValues.start}
            onChange={(newDate) => onDateChange(newDate, "start")}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(newDate) => onDateChange(newDate, "end")}
            className="form-control"
            dateFormat="Pp"
            showTimeSelect
            locale="es"
            timeCaption="Hora"
            minTime={addMinutes(formValues.start, 30)}
            maxTime={addMinutes(
              addHours(formValues.start, 23 - formValues.start.getHours()),
              30
            )}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
