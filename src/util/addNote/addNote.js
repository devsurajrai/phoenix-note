import { createNote } from "../../backendUtil/backendUtil";

export const addNote = (
  note,
  setIsCreateNewNote,
  userToken,
  authDispatch,
  setNote
) => {
  // console.log(note)
  (async () => {
    const updatedNotes = await createNote(note, userToken);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNotes } });
  })();
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
  setNote({ heading: "", body: "", isPinned: false, color: "", tags: [],priority:"high" });
};
