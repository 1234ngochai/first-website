import { useContext } from "react";
import "./TodoFooter.css"
import store from "../Context";

function TodoFooter(){
    const { state, dispatch } = useContext(store);

    function countCompletedTodo() {
        let count = 0;

        for (let i = 0; i < state.todoList.length; i++) {
            if (state.todoList[i].completed) {
            count++;
            }
        }

        return count + "/" + state.todoList.length;
    }

    return (
        <div className="footer">
            <div 
                className="todo-summary">
                {countCompletedTodo() ? countCompletedTodo() : ""}
            </div>
            <button 
                className="button"
                onClick={() => dispatch({type: "clear"})}> Clear All
            </button>
        </div>
    )
}
export default TodoFooter