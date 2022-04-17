import { updateNotes } from "../../backendUtil/backendUtil";

export const pinNote = (notes, authDispatch, noteId, userToken) => {
  let noteToUpdate = {};
  for (let note of notes) {
    if (note._id === noteId)
      noteToUpdate = { ...note, isPinned: !note.isPinned };
  }
  (async () => {
    const updatedNote = await updateNotes(noteToUpdate, userToken, noteId);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote } });
  })();
};
