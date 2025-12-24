import { useContext } from "react";
import store from "../../Context";

export default function AddButton() {
	const { state, dispatch } = useContext(store);
  const searchText = state.searchText;

	function handleAddClick() {
      dispatch({type:"add-draft"});
  }

	return (
		<button
      className="button"
      onClick={handleAddClick}>
      Add
    </button>
	)
}
