import "./TodoList.css"
type TodoList = {
    List: string[]
}

function TodoList(todoList:TodoList) {

  return (
    <ul className="todo-list">
      {todoList.List.map((TodoItem, index) =>{
        return <li key={index} className="todo-item"> {TodoItem} </li>
      }
    )}
    </ul>
  );
}

export default TodoList;