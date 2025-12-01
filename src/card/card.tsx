import "./Card.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";

export type Todo = {
    text: string;
    completed: boolean
}

function Card() {
    const [todoList, setTodoList] = useState<Todo[]>([])

    function addTodo(text:string){
        const newTodo:Todo = {
            text: text,
            completed: false
        }
        setTodoList([...todoList,newTodo])
    }

    function clearTodos(){
        setTodoList([])
        console.log("clear all")
    }

    function toggleTodo(index: number) {
        setTodoList(todoList.map((todo, i)=>
        index === i ? {text : todo.text, completed: !todo.completed } : todo
        ))
    }
    function removeTodo(index: number){
        const tempTodoList = [...todoList] 
        tempTodoList.splice(index,1)
        setTodoList(tempTodoList)
    }

    function countCompletedTodo(): string {
    let count = 0;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed) {
        count++;
        }
    }

    return count + "/" + todoList.length;
    }

    return(
        <div className="card">
            <Header title="To Do list" />
            <TodoInput onAddTodo = {addTodo}/>
            <TodoList list = {todoList} onRemoveItem={removeTodo} ontoggleTodo={toggleTodo} />
            <TodoFooter onClearTodo ={clearTodos} getCompletedCount={countCompletedTodo}/>
        </div>
    )
    
}

export default Card;