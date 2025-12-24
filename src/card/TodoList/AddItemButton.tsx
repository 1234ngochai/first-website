import { useContext } from "react";
import store from "../../Context";

type Props = {
    id: number
    text: string
}


export default function AddItemButton({id, text}: Props) {
	const {dispatch, state } = useContext(store);

	function handleAddClick() {
        if(!text)
        {
            return;
        }
        dispatch({ type: "add", payload: id });

  }

	return (
		<button
        className="todo-button"
        onClick={handleAddClick}
      >
      ok
    </button>
	)
}
