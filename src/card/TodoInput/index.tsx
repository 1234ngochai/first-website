import { useState } from "react"
import "./TodoInput.css"
import SearchInput from "./SearchInput";
import AddButton from "./AddButton";
type Props = {
    onSearch: (text: string) => void;
    onAddTodo: (text:string) => void;
}
function TodoInput({onSearch, onAddTodo}: Props) {
    const [value, setValue] = useState("");

    function handleInputChange(text: string) {
        setValue(text);
        onSearch(text);
    }

    function handleAddClick() {
        if (!value) {
            return;
        }

        onAddTodo(value);
        handleInputChange("");
    }
    return (
        <div className="todo-input">
            <SearchInput value={value} onChange={handleInputChange} />
            <AddButton onClick={handleAddClick} />
        </div>
    )
}

export default TodoInput
