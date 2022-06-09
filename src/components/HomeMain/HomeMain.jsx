import "./home-main.css";
import { SideBar } from "../SideBar/SideBar";
import { CreateNoteCard } from "../CreateNoteCard/CreateNoteCard";
import { Search } from "../Search/Search";
import { useState } from "react";
import { DisplayNotesCard } from "../DisplayNotesCard/DisplayNotesCard";
import { useShowNoteContext } from "../../contexts/showNotesContext";
import { DisplayNotesCardModal } from "../DisplayNotesCardModal/DisplayNotesCardModal";
import { useAuthContext } from "../../contexts/authContext";
import { SortFilter } from "./SortFilter/SortFilter";
import {getFilteredSortedNotes} from '../../util/sortFilter/sortFiltercompose.js'
import { useSortFilterContext } from "../../contexts/sortFilterContext";

const HomeMain = () => {
  const [isCreateNewNote, setIsCreateNewNote] = useState(false);
  const { auth } = useAuthContext();
  const { setShowNote } = useShowNoteContext();
  const {sortFilterState}=useSortFilterContext()
  const sortedFilteredNotes=getFilteredSortedNotes(auth.notes,sortFilterState)
  const [isEditing, setIsEditing] = useState(false);
console.log("sorted filtered notes",sortedFilteredNotes,"sort filter state",sortFilterState,auth.notes);
  return (
    <div className="home-main">
      <SideBar setIsCreateNewNote={setIsCreateNewNote} />
      <div className="main ">
        <Search />
        <SortFilter />
        <CreateNoteCard
          isCreateNewNote={isCreateNewNote}
          setIsCreateNewNote={setIsCreateNewNote}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <DisplayNotesCardModal />
        <h3 className="text-align">Your Notes</h3>

        <section>
          {sortedFilteredNotes&&sortedFilteredNotes.map(
            (note) =>
              !note.isPinned && (
                <DisplayNotesCard
                  key={note._id}
                  note={note}
                  setShowNote={setShowNote}
                  setIsCreateNewNote={setIsCreateNewNote}
                  setIsEditing={setIsEditing}
                />
              )
          )}
        </section>
      </div>
      <div className="right-sidebar  ">
        <h3>Pinned Notes</h3>
        {auth.notes.map(
          (note) =>
            note.isPinned && (
              <DisplayNotesCard
                key={note._id}
                note={note}
                setShowNote={setShowNote}
                setIsCreateNewNote={setIsCreateNewNote}
                setIsEditing={setIsEditing}
              />
            )
        )}
      </div>
    </div>
  );
};

export { HomeMain };
