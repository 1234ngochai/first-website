import { useContext } from "react";
import store from "../../Context";
import type { Todo } from "../../Context";
import RemoveButton from "./RemoveButton";
import AddItemButton from "./AddItemButton";
type Props = {
  todo: Todo
};

export default function DraftTodoItem({ todo }: Props) {
  const { dispatch } = useContext(store);

  return (
    <li 
    className="todo-item" 
    >
      <input
        value={todo.text}
        placeholder="Type your todo..."
        onChange={(e) =>
          dispatch({
            type: "update-text",
            payload: {id: todo.id, text: e.target.value},
          })
        }
      />
        <AddItemButton id={todo.id} text={todo.text} />
        <RemoveButton id={todo.id} />
    </li>
  );
}
