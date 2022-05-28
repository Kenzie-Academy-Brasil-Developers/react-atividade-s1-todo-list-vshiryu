import "./App.css";
import { useState } from "react";
import Form from "./components/Form.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [toDos, setToDos] = useState(
    localStorage.toDo ? JSON.parse(localStorage.toDo) : []
  );
  function addToDo(newToDo) {
    setToDos([...toDos, newToDo]);
    localStorage.setItem("toDo", JSON.stringify([...toDos, newToDo]));
  }
  function handleToDo(item) {
    setToDos(toDos.filter((elem) => elem !== item));
    localStorage.setItem(
      "toDo",
      JSON.stringify(
        JSON.parse(localStorage.toDo).filter((elem) => elem !== item)
      )
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addToDo={addToDo} />
        <ToDoList toDos={toDos} handleToDo={handleToDo} />
      </header>
    </div>
  );
}

export default App;
