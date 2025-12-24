import { useContext } from "react";
import "./TodoList.css"
import store from "../../Context";
import RemoveButton from "./RemoveButton";
import DraftTodoIteam from "./DraftTodoItem";
import TodoIteam from "./TodoItem";

function TodoList() {
  const { state, dispatch } = useContext(store);
  const filterdTodoList = state.todoList.filter(({text}) => text.includes(state.searchText));
  return (
    <ul className="todo-list">
      {filterdTodoList.map((todo) => todo.draft ? <DraftTodoIteam todo={todo}/> : <TodoIteam todo={todo}/> 
      )}
    </ul>
  );
}

export default TodoList;