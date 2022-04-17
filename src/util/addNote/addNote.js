import { createNote } from "../../backendUtil/backendUtil";

export const addNote = (
  note,
  setIsCreateNewNote,
  userToken,
  authDispatch,
  setNote
) => {
  (async () => {
    const updatedNotes = await createNote(note, userToken);
    console.log(updatedNotes);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNotes } });
  })();
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
  setNote({ heading: "", body: "", isPinned: false });
};
