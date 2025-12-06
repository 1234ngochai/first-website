import "./TodoInput.css"
import SearchInput from "./SearchInput";
import AddButton from "./AddButton";

function TodoInput() {
    return (
        <div className="todo-input">
            <SearchInput />
            <AddButton />
        </div>
    )
}

export default TodoInput
