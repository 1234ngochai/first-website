import { useContext } from "react";
import store from "../../Context";

export default function AddButton() {
	const { state, dispatch } = useContext(store);
  const searchText = state.searchText;

	function handleAddClick() {
      if (!searchText) {
          return;
      }

      dispatch({ type: "set-search", payload: "" });
      dispatch({ type: "add", payload: searchText });
  }

	return (
		<button
      className="button"
      onClick={handleAddClick}>
      Add
    </button>
	)
}
