import "./Card.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
function Card() {
    return(

        <div className="card">
            <Header text="To Do list" />
            <TodoInput/>
            <TodoList/>
            <TodoFooter/>
        </div>
    )
    
}

export default Card;