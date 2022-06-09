export const filterNotes = (notes,sortFilterState) => {
  const { work, health, travel, study, personal,high,medium,low } = sortFilterState.filter;
  let filtredNotesData = [];
  console.log("from filter function",{ work, health, travel, study, personal,high,medium,low });

  if (!work && !health && !travel && !study && !personal && !low && !high && !medium ) {
    return notes;
  } else {
    if (work) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.tags.includes("work")),
      ];
    }
    if (health) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.tags.includes("health")),
      ];
    }
    if (travel) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.tags.includes("travel")),
      ];
    }
    if (study) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.tags.includes("study")),
      ];
    }
    if (personal) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.tags.includes("personal")),
      ];

    }
    if (high) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.priority==="high"),
      ];
    }
    if (medium) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.priority==="medium"),
      ];
    }
    if (low) {
      filtredNotesData = [
        ...filtredNotesData,
        ...notes.filter((note) => note.priority==="low"),
      ];
    }
    return filtredNotesData;
  }
};
