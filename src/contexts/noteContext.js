import { createContext, useContext, useState } from "react";
import { getDate } from "../util/util";
const NoteContext = createContext({});

const useNoteContext = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  const [note, setNote] = useState({
    id: "",
    heading: "",
    body: "",
    isPinned: false,
    color: "",
    createdAt: "",
  });

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContextProvider, useNoteContext };
