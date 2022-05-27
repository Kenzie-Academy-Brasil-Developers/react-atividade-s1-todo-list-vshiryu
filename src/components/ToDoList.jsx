function ToDoList({ toDos, handleToDo }) {
  return (
    <div className="list-container">
      <ul>
        {toDos.map((elem, index) => (
          <li key={index}>
            <span className="to-do">{elem}</span>
            <button onClick={() => handleToDo(elem)}>concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
