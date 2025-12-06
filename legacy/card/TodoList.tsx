import "./TodoList.css"
import type { Todo } from "./card"

type Props = {
  list: Todo[],
  searchText: string;
  onRemoveItem: (index: number) => void;
  onToggleTodo: (index: number) => void;
  toggleTodoEdit: (index: number) => void;
}

function TodoList({ list, searchText, onRemoveItem, onToggleTodo, toggleTodoEdit }: Props) {
  const filterdTodoList = list.filter(({ text }) => text.includes(searchText));

  return (
    <ul className="todo-list">
      {filterdTodoList.map((todo, index) => {
        return (
          <li
            className= {todo.completed ? "todo-item todo-done" : "todo-item"}
            key={index}
            onClick={() => onToggleTodo(index)}
          >
            <div className = "todo-text"
            >
              {todo.text}
            </div>

            <button
              onClick={(e) =>
                {e.stopPropagation();
                onRemoveItem(index)}
              }
              className = "todo-button"
            >
              x
            </button>

            <button
              className = "todo-button"
              onClick={(e) =>
                {e.stopPropagation();
                  toggleTodoEdit(index);
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
