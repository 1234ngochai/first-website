import { useState } from "react"
import "./TodoInput.css"
type HandleTodoList = {
    handleTodoList: (e:string) => void;
}
function TodoInput(onTodoList: HandleTodoList) {
    const [value, setValue] = useState("");
    function handleButtonClick() {
        if (!value) 
            {return;}
        onTodoList.handleTodoList(value);
        setValue("");
    }
    return (
        <div className="todo-input">
            <input
                className="input"
                placeholder="Add your new todo"
                value = {value}
                onChange={(e)=> setValue(e.target.value)}
            />
            <button 
            className="button"
            onClick={handleButtonClick}>
            Add
            </button>
        </div>
    )
}

export default TodoInput