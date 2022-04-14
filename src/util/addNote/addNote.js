export const addNote = (setNotesData, setIsCreateNewNote, note) => {
  setNotesData((notesData) => ({
    ...notesData,
    notes: [...notesData.notes, note],
  }));
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
};
