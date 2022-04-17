import axios from "axios";

const getNotes = async (userToken) => {
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const notes = await axios.get("/api/notes", config);

    console.log(notes.data.notes);
    return notes.data.notes;
  } catch (error) {
    console.log("error getting user notes", error);
  }
};
const getArchives = async (userToken) => {
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const archives = await axios.get("/api/archives", config);
    console.log(archives.data.archives);
    return archives.data.archives;
  } catch (error) {
    console.log("error getting user archives", error);
  }
};

const getUser = async (userToken) => {
  let config = {
    headers: {
      authorization: userToken,
    },
  };
  try {
    const user = await axios.get("/api/auth/user", config);
    return user;
  } catch (error) {
    console.log("error getting user userInfo", error);
  }
};
export { getNotes, getArchives, getUser };
