import "./Card.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { useState } from "react";

export type Todo = {
    text: string;
    completed: boolean
    edditing: boolean
}

function Card() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    function addTodo(text:string){
        const newTodo:Todo = {
            text: text,
            completed: false,
            edditing: false
        }
        setTodoList([...todoList,newTodo])
    }

    function clearTodos(){
        setTodoList([])
        console.log("clear all")
    }

    function toggleTodoComplete(index: number) {
        setTodoList(todoList.map((todo, i)=>
        index === i ? {...todo, completed: !todo.completed } : todo
        ))
    }
    function toggleTodoEdit(index: number) {
        setTodoList(todoList.map((todo, i)=>
        index === i ? {...todo, edditing: !todo.edditing } : todo
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
            <TodoInput onAddTodo = {addTodo} onSearch={setSearchText}/>
            <TodoList list={todoList} searchText={searchText} onRemoveItem={removeTodo} onToggleTodo={toggleTodoComplete} toggleTodoEdit ={toggleTodoEdit} />
            <TodoFooter onClearTodo ={clearTodos} getCompletedCount={countCompletedTodo}/>
        </div>
    )

}

export default Card;
