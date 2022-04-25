import { updateNotes } from "../../backendUtil/backendUtil";
export const updateNote = (
  note,
  setIsCreateNewNote,
  userToken,
  authDispatch,
  setNote,
  setIsEditing
) => {
  (async () => {
    const updatedNote = await updateNotes(note, userToken, note.id);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote } });
  })();
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
  setNote({ heading: "", body: "", isPinned: false, color: "", tags: [] });
  setIsEditing(false);
};
