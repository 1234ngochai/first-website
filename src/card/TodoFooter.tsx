import "./TodoFooter.css"

type Props = {
    onClearTodo: () => void;
    getCompletedCount: () => string;
}

function TodoFooter({onClearTodo,getCompletedCount}: Props){
    return (
        <div className="footer">
            <div 
                className="todo-summary">
                {getCompletedCount()}
            </div>
            <button 
                className="button"
                onClick={() => onClearTodo()}> Clear All
            </button>
        </div>
    )
}
export default TodoFooter