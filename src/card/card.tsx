import "./Card.css";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList/TodoList";
import TodoFooter from "./TodoFooter";
import { useReducer} from "react";
import store, { initialState } from "../Context";
import reducer from "../Reducer"

const Provider = store.Provider;

function Card() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
    <Provider value = {{state,dispatch}}>
        <div className="card">
            <Header title="To Do list" />
            <TodoInput />
            <TodoList  />
            <TodoFooter />
        </div>
    </Provider>
    )

}

export default Card;
