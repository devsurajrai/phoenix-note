import { deleteNotes } from "../../backendUtil/backendUtil";

export const deleteNote = (note, userToken, authDispatch) => {
  (async () => {
    const updatedNotes = await deleteNotes(note, userToken, note._id);
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNotes } });
  })();
};
