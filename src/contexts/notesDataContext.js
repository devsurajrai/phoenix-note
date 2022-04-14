import { createContext, useContext, useState } from "react";
const NotesDataContext = createContext(null);

const useNotesDataContext = () => useContext(NotesDataContext);

const NotesDataContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState({
    notes: [],
    archieve: [],
  });
  console.log(notesData);
  return (
    <NotesDataContext.Provider value={{ notesData, setNotesData }}>
      {children}
    </NotesDataContext.Provider>
  );
};

export { NotesDataContextProvider, useNotesDataContext };
