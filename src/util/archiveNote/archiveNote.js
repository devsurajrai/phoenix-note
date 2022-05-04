import { archiveNotes } from "../../backendUtil/backendUtil";
export const archiveNote = (note, userToken, authDispatch) => {
  console.log(note);
  (async () => {
    const updatedNote = await archiveNotes(note, userToken, note._id);
    console.log(updatedNote);
    authDispatch({
      type: "SET_ARCHIVES",
      payload: { value: updatedNote.archives },
    });
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote.notes } });
  })();
};
