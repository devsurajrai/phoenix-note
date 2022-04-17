import { updateNote } from "../../backendUtil/backendUtil";

export const pinNote = (notes, authDispatch, noteId, userToken) => {
  let noteToUpdate = {};
  for (let note of notes) {
    if (note._id === noteId)
      noteToUpdate = { ...note, isPinned: !note.isPinned };
  }
  (async () => {
    const updatedNote = await updateNote(noteToUpdate, userToken, noteId);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote } });
  })();

  //   setNotesData((notesData) => {
  //     return {
  //       ...notesData,
  //       notes: notesData.notes.map((item) => {
  //         if (JSON.stringify(note) === JSON.stringify(item)) {
  //           return { ...item, isPinned: !item.isPinned };
  //         }
  //         return item;
  //       }),
  //     };
  //   });
};
