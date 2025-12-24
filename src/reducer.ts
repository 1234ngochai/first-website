import TodoList from "./card/TodoList/TodoList";
import type { State, Todo } from "./Context";
import type { Action } from "./interfaces/action";

function addTodo(state: State, id: number) {
    return {
        ...state,
        todoList: state.todoList.map((todo) => 
            todo.id == id ? {...todo, draft:!todo.draft} : todo)
    }
}

function addDraft(state: State) {
	const newTodo:Todo = {
      id: 0,
      text: "",
      completed: false,
      editing: false,
      draft: true,
  }

    const newList = [newTodo, ...state.todoList].map((todo, i) => ({
        ...todo,
        id: i,
    }));

    console.log({ ...state, todoList: newList });

    return { ...state, todoList: newList };
}

function reIndexTodoItem(todoList: Todo[]){
    const newList = todoList.map((todo, i) => ({
        ...todo,
        id: i,
    }));
    return newList
}

function UpdateTest(state:State, {id, text} : {id: number; text: string}){
    return {
        ...state,
        todoList: state.todoList.map((todo) => 
            todo.id == id ? {...todo, text} : todo)
    }
}

export default function reducer(state: State, action: Action) {
    switch (action.type) {
        case "add":
            console.log(addTodo(state, action.payload));
            return addTodo(state, action.payload);
        case "remove":
            const tempTodoList = [...state.todoList];
            tempTodoList.splice(action.payload, 1);

            return { ...state, todoList: reIndexTodoItem(tempTodoList) };

        case "clear":
            return { ...state, todoList: [] };

        case "mark-as-done":
            return {
                ...state,
                todoList: state.todoList.map((todo, i)=>
                    action.payload === todo.id ? {...todo, completed: !todo.completed } : todo
                )
            }

        case "toggle-edit":
            return {
                ...state,
                todoList: state.todoList.map((todo)=>
                    action.payload === todo.id ? {...todo, editing: !todo.editing } : todo
                )
            }

        case "set-search":
            return { ...state, searchText: action.payload }

        case "add-draft":
            return addDraft(state);
        
        case "update-text":
            return UpdateTest(state, action.payload)
        default:
            return state;
    }
}
