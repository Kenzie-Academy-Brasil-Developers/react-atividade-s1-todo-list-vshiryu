import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [toDos, setToDos] = useState(
    localStorage.toDo ? JSON.parse(localStorage.toDo) : []
  );
  function addToDo(newToDo) {
    setToDos([...toDos, newToDo]);
  }
  function handleToDo(item) {
    setToDos(toDos.filter((elem) => elem !== item));
  }

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDos));
  }, [toDos]);

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
