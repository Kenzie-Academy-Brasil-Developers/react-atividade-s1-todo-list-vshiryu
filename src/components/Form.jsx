import { useState } from "react";

function Form({ addToDo }) {
  const [toDoNew, setToDoNew] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        addToDo(toDoNew);
      }}
    >
      <input
        type="text"
        placeholder="Insira uma tarefa!"
        onChange={(event) => setToDoNew(event.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
