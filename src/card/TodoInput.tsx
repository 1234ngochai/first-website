import { useState } from "react"
import "./TodoInput.css"
type Props = {
    onAddTodo: (text:string) => void;
}
function TodoInput({onAddTodo}: Props) {
    const [value, setValue] = useState("");
    function handleAddClick() {
        if (!value) 
            {return;}
            onAddTodo(value);
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
            onClick={handleAddClick}>
            Add
            </button>
        </div>
    )
}

export default TodoInput