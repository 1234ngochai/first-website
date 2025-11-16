import "./TodoList.css"
type Todo = {
    text: string
}

function TodoList() {
  return (
    <ul className="todo-list">
      <li className="todo-item">Buy a new gaming laptop</li>
      <li className="todo-item">Complete previous task</li>
      <li className="todo-item">Create a new todo</li>
    </ul>
  );
}

export default TodoList;