import "./home-main.css";
import { SideBar } from "../SideBar/SideBar";
import { CreateNoteCard } from "../CreateNoteCard/CreateNoteCard";
import { Search } from "../Search/Search";
<<<<<<< HEAD
import { useState } from "react";
import { DisplayNotesCard } from "../DisplayNotesCard/DisplayNotesCard";
import { useNotesDataContext } from "../../contexts/notesDataContext";
import { useShowNoteContext } from "../../contexts/showNotesContext";
import { DisplayNotesCardModal } from "../DisplayNotesCardModal/DisplayNotesCardModal";
const HomeMain = () => {
  const [isCreateNewNote, setIsCreateNewNote] = useState(false);
  const { notesData } = useNotesDataContext();
  const { setShowNote } = useShowNoteContext();
  const pinNote = (note, setNotesData, id) => {
    setNotesData((notesData) => {
      return {
        ...notesData,
        notes: notesData.notes.map((item) => {
          if (JSON.stringify(note) === JSON.stringify(item)) {
            return { ...item, isPinned: !item.isPinned };
          }
          return item;
        }),
      };
    });
  };
  console.log(notesData.notes);
=======
import { useAuthContext } from "../../contexts/authContext";
const HomeMain = () => {
  const { auth } = useAuthContext();
  console.log(auth);
>>>>>>> origin/login-feature
  return (
    <div className="home-main">
      <SideBar setIsCreateNewNote={setIsCreateNewNote} />
      <div className="main ">
        <Search />
<<<<<<< HEAD
        <CreateNoteCard
          isCreateNewNote={isCreateNewNote}
          setIsCreateNewNote={setIsCreateNewNote}
        />
        <DisplayNotesCardModal />
        <h3 className="text-align">Your Notes</h3>

=======
        <NoteCard />
>>>>>>> origin/login-feature
        <section>
          {notesData.notes.map(
            (note) =>
              !note.isPinned && (
                <DisplayNotesCard
                  key={note.id}
                  note={note}
                  setShowNote={setShowNote}
                  pinNote={pinNote}
                />
              )
          )}
        </section>
      </div>
      <div className="right-sidebar  ">
        <h3>Pinned Notes</h3>
        {notesData.notes.map(
          (note) =>
            note.isPinned && (
              <DisplayNotesCard
                key={note.id}
                note={note}
                setShowNote={setShowNote}
                pinNote={pinNote}
              />
            )
        )}
      </div>
    </div>
  );
};

export { HomeMain };
