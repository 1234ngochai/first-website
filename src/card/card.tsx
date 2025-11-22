import "./Card.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";
function Card() {
    const [todoList, setTodoList] = useState<string[]>([])
    function addTodoList(text:string){
        setTodoList([...todoList,text])
    }
    function clearTodoList(){
        setTodoList([])
        console.log("clear all")
    }
    return(
        <div className="card">
            <Header text="To Do list" />
            <TodoInput handleTodoList = {addTodoList}/>
            <TodoList List = {todoList}/>
            <TodoFooter handleTodoList ={clearTodoList}/>
        </div>
    )
    
}

export default Card;