type AddAction = {
    type: "add";
    payload: number;
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
    payload: number;
}

type SetSearchAction = {
    type: "set-search";
    payload: string;
}

type ToggleEditAction = {
    type: "toggle-edit";
    payload: number;
}

type AddDraft = {
    type: "add-draft";
}

type UpdateTest ={
    type: "update-text"
    payload: {id: number, text: string};
}
export type Action = AddAction | RemoveAction | ClearAction | MarkAsDoneAction | SetSearchAction | ToggleEditAction | AddDraft | UpdateTest;