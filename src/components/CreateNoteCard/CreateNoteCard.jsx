import { useState } from "react";
import { useNotesDataContext } from "../../contexts/notesDataContext";
import "./create-note-card.css";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../../util/addNote/addNote";

export const CreateNoteCard = ({ isCreateNewNote, setIsCreateNewNote }) => {
  const { setNotesData } = useNotesDataContext();

  const [note, setNote] = useState({
    id: "",
    heading: "",
    body: "",
    isPinned: false,
  });
  return (
    <>
      {isCreateNewNote && (
        <div>
          <div
            className="note-card-container position-a"
            onClick={() =>
              setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote)
            }
          ></div>
          <div className="note-card-modal position-a">
            <div className="note-card  flex-c p-t-md m-t-xl p-md br-md position-r">
              <input
                className="note-card__heading text-md br-md"
                type="text"
                placeholder="Enter Heading"
                onBlur={(e) =>
                  setNote((note) => ({ ...note, heading: e.target.value }))
                }
              />
              <textarea
                className="note-card__textarea br-md"
                placeholder="Start writing your note here ..."
                onBlur={(e) =>
                  setNote((note) => ({ ...note, body: e.target.value }))
                }
              ></textarea>
              <div className="note-card__footer flex-r flex-sb">
                <span className="  note-card__footer--date text-sm">
                  Created on 07/04/2022
                </span>
                <div className="flex-r flex-center">
                  <div className="note-card__footer--icons flex-r flex-sb">
                    <i className="fa-solid fa-palette note-card-icon"></i>
                    <i className="fa-solid fa-tag note-card-icon"></i>
                    {/* comented for future use  */}
                    {/* <i className="fa-solid fa-box-archive note-card-icon"></i>
                    <i className="fa-solid fa-trash note-card-icon"></i> */}
                  </div>
                  <button
                    className="button button-secondary btn-sm m-l-md "
                    onClick={() =>
                      addNote(setNotesData, setIsCreateNewNote, note)
                    }
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
