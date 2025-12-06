import type { State, Todo } from "./Context";
import type { Action } from "./interfaces/actions";

function addTodo(state: State, text: string) {
	const newTodo:Todo = {
      id: state.todoList.length,
      text,
      completed: false,
      edditing: false
  }

  return { ...state, todoList: [...state.todoList, newTodo]};
}

export default function reducer(state: State, action: Action) {
    switch (action.type) {
        case "add":
            return addTodo(state, action.payload);
        case "remove":
            const tempTodoList = [...state.todoList];
            tempTodoList.splice(action.payload, 1);

            return { ...state, todoList: tempTodoList };

        case "clear":
            return { ...state, todoList: [] };

        case "mark-as-done":
            return {
                ...state,
                todoList: state.todoList.map((todo, i)=>
                    action.payload === i ? {...todo, completed: !todo.completed } : todo
                )
            }

        case "toggle-edit":
            return {
                ...state,
                todoList: state.todoList.map((todo, i)=>
                    action.payload === i ? {...todo, edditing: !todo.edditing } : todo
                )
            }

        case "set-search":
            return { ...state, searchText: action.payload }
        default:
            return state;
    }
}
