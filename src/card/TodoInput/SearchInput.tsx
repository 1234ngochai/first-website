import { useContext } from "react";
import store from "../../Context"

export default function SearchInput() {
    const {state, dispatch} = useContext(store);
    
	return (
		<input
        className="input"
        placeholder="Add your new todo"
        value={state.searchText}
        onChange={(e)=> {dispatch({type: "set-search", payload: e.target.value})}}
    />
	)
}
