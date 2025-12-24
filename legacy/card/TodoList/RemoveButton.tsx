import { useContext } from "react";
import store from "../../Context";

type Props = {
	id: number;
}

export default function RemoveButton({ id }: Props) {
	const { dispatch } = useContext(store);

	return (
		<button
      onClick={(e) =>{
        e.stopPropagation();
        dispatch({ type: "remove", payload: id })
      }}
      className = "todo-button"
    >
      x
    </button>
	)
}
