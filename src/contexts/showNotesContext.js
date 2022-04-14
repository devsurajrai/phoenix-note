import { createContext, useContext, useState } from "react";
const ShowNoteContext = createContext(null);

const useShowNoteContext = () => useContext(ShowNoteContext);

const ShowNoteContextProvider = ({ children }) => {
  const [showNote, setShowNote] = useState({
    shouldShowNote: false,
    heding: "",
    body: "",
  });
  console.log(showNote);

  return (
    <ShowNoteContext.Provider value={{ showNote, setShowNote }}>
      {children}
    </ShowNoteContext.Provider>
  );
};

export { ShowNoteContextProvider, useShowNoteContext };
