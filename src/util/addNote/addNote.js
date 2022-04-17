import { createNote } from "../../backendUtil/backendUtil";

export const addNote = (note, setIsCreateNewNote, userToken, authDispatch) => {
  (async () => {
    const updatedNotes = await createNote(note, userToken);
    console.log(updatedNotes);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNotes } });
  })();
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
};
