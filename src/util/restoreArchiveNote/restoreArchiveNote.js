import { restoreArchiveNotes } from "../../backendUtil/backendUtil";
export const restoreArchiveNote = (note, userToken, authDispatch) => {
  (async () => {
    const updatedNote = await restoreArchiveNotes(note, userToken, note._id);
    authDispatch({
      type: "SET_ARCHIVES",
      payload: { value: updatedNote.archives },
    });
    authDispatch({ type: "SET_NOTES", payload: { value: updatedNote.notes } });
  })();
};
