import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";

function ToDoList({ toDos, handleToDo }) {
  return (
    <div className="list-container">
      <TransitionGroup component="ul">
        {toDos
          .sort(
            (a, b) =>
              new Date(
                a.data.split("/")[2],
                a.data.split("/")[1] - 1,
                a.data.split("/")[0]
              ) -
              new Date(
                b.data.split("/")[2],
                b.data.split("/")[1] - 1,
                b.data.split("/")[0]
              )
          )
          .map((elem, index) => (
            <CSSTransition key={index} timeout={700} classNames="item">
              <li
                key={elem.task + index}
                style={{
                  border:
                    new Date(
                      elem.data.split("/")[2],
                      elem.data.split("/")[1] - 1,
                      elem.data.split("/")[0]
                    ).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
                      ? "solid 1px red"
                      : "",
                }}
              >
                {console.log(toDos)}
                <span className="to-do">{elem.task}</span>{" "}
                <span className="data">{elem.data}</span>
                <button onClick={() => handleToDo(elem)}>Concluir</button>
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
}

export default ToDoList;
