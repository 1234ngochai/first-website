import { useContext, useState } from "react";
import type { Todo } from "../../Context";
import store from "../../Context";
import RemoveButton from "./RemoveButton";

type Props = {
  todo: Todo;
};

function TodoIteam({ todo }: Props) {
  const { dispatch } = useContext(store);

  const [draftText, setDraftText] = useState(todo.text);

  function handleEditButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    if (todo.editing) {
      dispatch({
        type: "update-text",
        payload: { id: todo.id, text: draftText },
      });
    }

    dispatch({ type: "toggle-edit", payload: todo.id });
  }

  return (
    <li
      className={todo.completed ? "todo-item todo-done" : "todo-item"}
      onClick={() => dispatch({ type: "mark-as-done", payload: todo.id })}
    >
        <div className="todo-text">
            {todo.editing ? (
            <input
                value={draftText}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setDraftText(e.target.value)}
            />
            ) : (
            todo.text
            )}
        </div>

        {todo.editing ? (
        <button
            className="todo-button"
            onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "toggle-edit", payload: todo.id });
            setDraftText(todo.text);
            }}
        >
            x
        </button>
        ) 
        :(
        <RemoveButton id={todo.id} />
        )}

        <button className="todo-button" onClick={handleEditButtonClick}>
            {todo.editing ? "Done" : "Edit"}
        </button>
    </li>
  );
}

export default TodoIteam;
