import "./TodoList.css"
import type { Todo } from "./card"

type Props = {
  list: Todo[],
  onRemoveItem: (index: number) => void;
  ontoggleTodo: (index: number) => void;
}

function TodoList({ list, onRemoveItem, ontoggleTodo }: Props) {
  return (
    <ul className="todo-list">
      {list.map((todo, index) => {
        return (
          <li
            className= {todo.completed ? "todo-item todo-done" : "todo-item"}
            key={index}
          >
            {todo.text}

            <button 
              onClick={() => onRemoveItem(index)}
            >
              remove
            </button>

            <button
              onClick={() => ontoggleTodo(index)}
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
