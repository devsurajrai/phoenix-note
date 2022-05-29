import { deleteArchiveNotes } from "../../backendUtil/backendUtil";

export const deleteArchiveNote = (note, userToken, authDispatch) => {
  (async () => {
    const updatedNotes = await deleteArchiveNotes(note, userToken, note._id);
    authDispatch({ type: "SET_ARCHIVES", payload: { value: updatedNotes } });
  })();
};
