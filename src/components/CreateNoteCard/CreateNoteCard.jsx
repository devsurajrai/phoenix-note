import "./create-note-card.css";

import { useAuthContext } from "../../contexts/authContext";
import { addNote, updateNote } from "../../util/util";
import { useNoteContext } from "../../contexts/noteContext";

export const CreateNoteCard = ({
  isCreateNewNote,
  setIsCreateNewNote,
  isEditing,
  setIsEditing,
}) => {
  const { auth, userToken, authDispatch } = useAuthContext();
  const { note, setNote } = useNoteContext();
  return (
    <>
      {isCreateNewNote && (
        <div>
          <div
            className="note-card-container position-a"
            onClick={() => {
              setNote({ id: "", heading: "", body: "", isPinned: false });
              setIsEditing(false);
              setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
            }}
          ></div>
          <div className="note-card-modal position-a">
            <div className="note-card  flex-c p-t-md m-t-xl p-md br-md position-r">
              <input
                className="note-card__heading text-md br-md"
                type="text"
                placeholder="Enter Heading"
                onChange={(e) =>
                  setNote((note) => ({ ...note, heading: e.target.value }))
                }
                value={note.heading}
                autoFocus={true}
              />
              <textarea
                className="note-card__textarea br-md"
                placeholder="Start writing your note here ..."
                onChange={(e) =>
                  setNote((note) => ({ ...note, body: e.target.value }))
                }
                value={note.body}
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

                  {!isEditing && (
                    <button
                      className="button button-secondary btn-sm m-l-md "
                      onClick={() =>
                        addNote(
                          note,
                          setIsCreateNewNote,
                          userToken,
                          authDispatch,
                          setNote
                        )
                      }
                    >
                      Add Note
                    </button>
                  )}
                  {isEditing && (
                    <button
                      className="button button-secondary btn-sm m-l-md "
                      onClick={() =>
                        updateNote(
                          note,
                          setIsCreateNewNote,
                          userToken,
                          authDispatch,
                          setNote,
                          auth.notes,
                          setIsEditing
                        )
                      }
                    >
                      Update Note
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
