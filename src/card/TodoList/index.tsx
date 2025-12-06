import { useContext } from "react";
import "./TodoList.css"
import store from "../../Context";
import RemoveButton from "./RemoveButton";

function TodoList() {
  const { state, dispatch } = useContext(store);

  const filterdTodoList = state.todoList.filter(({ text }) => text.includes(state.searchText));

  return (
    <ul className="todo-list">
      {filterdTodoList.map((todo) => {
        return (
          <li
            className= {todo.completed ? "todo-item todo-done" : "todo-item"}
            key={todo.id}
            onClick={() => dispatch({ type: "mark-as-done", payload: todo.id })}
          >
            <div className = "todo-text"
            >
              {todo.text}
            </div>

            <RemoveButton id={todo.id} />

            <button
              className = "todo-button"
              onClick={(e) =>
                {e.stopPropagation();
                  dispatch({ type: "toggle-edit", payload: todo.id })
                }
              }
            >
              {todo.edditing ? "Done" : "Edit"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
