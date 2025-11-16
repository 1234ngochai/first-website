import "./TodoFooter.css"

type Footer = {
   text?: string;
}

function TodoFooter(footer: Footer){
    return (
        <div className="footer">
            <div 
                className="todo-summary">
                Footer
            </div>
            <button 
                className="button"> Clear All
            </button>
        </div>
    )
}
export default TodoFooter