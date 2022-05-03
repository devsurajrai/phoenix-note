import axios from "axios";
export const deleteNotes = async (note, userToken, id) => {
  console.log(id);
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const updatedNotes = await axios.delete(`/api/notes/${id}`, config);
    console.log("testing", updatedNotes);
    return updatedNotes.data.notes;
  } catch (error) {
    console.log("error deleting the note", error);
  }
};
