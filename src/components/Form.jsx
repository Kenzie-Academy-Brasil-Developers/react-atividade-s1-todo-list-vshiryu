import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";

function Form({ addToDo }) {
  const [toDoNew, setToDoNew] = useState("");
  const [data, setData] = useState(new Date().toLocaleDateString("en-GB"));
  const [picker, setPicker] = useState(new Date());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        addToDo({ task: toDoNew, data });
        toast.success("Tarefa adicionada com sucesso!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }}
    >
      <div className="inputs-container">
        <input
          className="task-input"
          type="text"
          placeholder="Insira uma tarefa!"
          onChange={(event) => setToDoNew(event.target.value)}
          required
        />
        <DatePicker
          className="date-input"
          selected={picker}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          onChange={(date) => {
            setPicker(date);
            setData(date.toLocaleDateString("en-GB"));
          }}
          withPortal={windowSize.innerWidth < 900}
        />
      </div>
      <button type="submit" disabled={toDoNew.length === 0}>
        Enviar
      </button>
      <ToastContainer theme="dark" />
    </form>
  );
}

export default Form;
