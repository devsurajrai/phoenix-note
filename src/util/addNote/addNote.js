export const addNote = (setNotesData, setIsCreateNewNote, note, uuidv4) => {
  setNotesData((notesData) => ({
    ...notesData,
    notes: [{ ...note, id: uuidv4() }, ...notesData.notes],
  }));
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
};
