import "./TodoInput.css"
function TodoInput() {
    return (
        <div className="todo-input">
            <input
                className="input"
                placeholder="Add your new todo"
            />
            <button className="button"> Add
            </button>
        </div>
    )
}

export default TodoInput