import { updateNotes } from "../../backendUtil/backendUtil";
export const updateNote = (
  note,
  setIsCreateNewNote,
  userToken,
  authDispatch,
  setNote,
  notes,
  setIsEditing
) => {
  let noteToUpdate = {};
  for (let item of notes) {
    if (item._id === note.id)
      noteToUpdate = { ...item, heading: note.heading, body: note.body };
  }
  (async () => {
    const updatedNote = await updateNotes(noteToUpdate, userToken, note.id);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote } });
  })();
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
  setNote({ id: "", heading: "", body: "", isPinned: false });
  setIsEditing(false);
};
