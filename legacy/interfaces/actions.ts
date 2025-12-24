type AddAction = {
		type: "add";
		payload: string;
}

type RemoveAction = {
		type: "remove";
		payload: number;
}

type ClearAction = {
		type: "clear";
}

type MarkAsDoneAction = {
		type: "mark-as-done";
		payload: number
}

type SetSearchAction = {
		type: "set-search";
		payload: string
}

type ToggleEditAction = {
		type: "toggle-edit";
		payload: number
}

export type Action = AddAction | RemoveAction | ClearAction | MarkAsDoneAction | SetSearchAction | ToggleEditAction;
