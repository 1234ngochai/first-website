import { createContext, type ActionDispatch } from "react";
import type { Action } from "./interfaces/actions";

export type Todo = {
    id: number;
    text: string;
    completed: boolean
    edditing: boolean
}


export type State = {
    todoList: Todo[],
    searchText: string;
}

type Store = {
	state: State,
	dispatch: ActionDispatch<[Action]>,
}

export const initialState: State = {
    todoList: [],
    searchText: "",
}


const store = createContext<Store>({
	state: initialState,
	dispatch: () => {},
});

export default store;
