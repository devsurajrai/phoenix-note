import { createContext, useContext, useState } from "react";

const NoteContext = createContext({});

const useNoteContext = () => useContext(NoteContext);

const NoteContextProvider = ({ children }) => {
  const [note, setNote] = useState({
    id: "",
    heading: "",
    body: "",
    isPinned: false,
  });

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContextProvider, useNoteContext };
