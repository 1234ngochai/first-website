import "./TodoFooter.css"

type HandleTodoList = {
    handleTodoList: () => void;
}

function TodoFooter(onTodoList: HandleTodoList){
    return (
        <div className="footer">
            <div 
                className="todo-summary">
                Footer
            </div>
            <button 
                className="button"
                onClick={() => onTodoList.handleTodoList()}> Clear All
            </button>
        </div>
    )
}
export default TodoFooter