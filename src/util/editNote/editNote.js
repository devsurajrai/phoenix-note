export const editNote = (
  notes,
  noteId,
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
        createdAt: note.createdAt,
        color: note.color,
        tags: note.tags,
      });
    }
  }
  setIsEditing(true);
  setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
};
