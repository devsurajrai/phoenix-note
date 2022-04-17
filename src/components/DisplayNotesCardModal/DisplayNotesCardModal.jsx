import { useShowNoteContext } from "../../contexts/showNotesContext";
import "./display-notes-card-modal.css";

export const DisplayNotesCardModal = () => {
  const { showNote, setShowNote } = useShowNoteContext();
  return (
    <>
      {showNote.shouldShowNote && (
        <div>
          <div
            className="note-card-container position-a"
            onClick={() =>
              setShowNote((showNote) => ({
                shouldShowNote: !showNote.shouldShowNote,
                heading: "",
                body: "",
              }))
            }
          ></div>
          <div className="display-note-card-modal position-a">
            <div className="display-notes-card-modal flex-c flex-sb  p-t-md l p-md br-md position-r ">
              <div className="display-notes-card-modal__heading text-md br-md">
                <h2 className="p-b-xs">{showNote.heading}</h2>
              </div>
              <div className="display-notes-card-modal__body br-md text-sm m-r-md">
                <p
                  style={{ width: "96%" }}
                  className="display-notes-card__body--content"
                >
                  {showNote.body}
                </p>
              </div>
              <div className="display-notes-card__footer m-t-md flex-r ">
                <span className="  display-notes-card__footer--date text-sm">
                  Created on 07/04/2022
                </span>
                <div className=" icons-container flex-r flex-center">
                  <div className="display-notes-card__footer--icons flex-r flex-sb">
                    <i className="fa-solid fa-palette display-notes-card-icon"></i>
                    <i className="fa-solid fa-tag display-notes-card-icon"></i>
                    <i className="fa-solid fa-box-archive display-notes-card-icon"></i>
                    <i className="fa-solid fa-trash display-notes-card-icon"></i>
                  </div>
                  <button className="button button-secondary btn-sm m-l-md ">
                    Edit Note
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
