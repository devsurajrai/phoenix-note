import axios from "axios";
const createNote = async (note, userToken) => {
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const updatedNotes = await axios.post("/api/notes", { note: note }, config);
    return updatedNotes.data.notes;
  } catch (error) {
    console.log("error creating the note", error);
  }
};
const updateNotes = async (note, userToken, id) => {
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const updatedNotes = await axios.post(
      `/api/notes/${id}`,
      { note: note },
      config
    );
    console.log(updatedNotes.data.notes);
    return updatedNotes.data.notes;
  } catch (error) {
    console.log("error creating the note", error);
  }
};

export { createNote, updateNotes };
