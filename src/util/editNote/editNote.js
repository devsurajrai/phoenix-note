export const editNote = (
  notes,
  authDispatch,
  noteId,
  userToken,
  setNote,
  setIsCreateNewNote,
  setIsEditing
) => {
  setIsEditing((isEditing) => !isEditing);
  for (let note of notes) {
    if (note._id === noteId) {
      setNote({
        id: noteId,
        heading: note.heading,
        body: note.body,
        isPinned: note.isPinned,
      });
    }
  }
  setIsEditing(true);
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);

  //   let noteToUpdate = {};
  //   for (let note of notes) {
  //     if (note._id === noteId)
  //       noteToUpdate = { ...note, isPinned: !note.isPinned };
  //   }
  //   (async () => {
  //     const updatedNote = await updateNote(noteToUpdate, userToken, noteId);
  //     authDispatch({ type: "SET_NOTES", payload: { value: updatedNote } });
  //   })();
};
