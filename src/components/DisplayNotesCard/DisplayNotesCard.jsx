import { useNotesDataContext } from "../../contexts/notesDataContext";
import { useShowNoteContext } from "../../contexts/showNotesContext";
import "./display-notes-card.css";

const DisplayNotesCard = ({ note, setShowNote, pinNote }) => {
  const { heading, body, isPinned } = note;
  const { notesData, setNotesData } = useNotesDataContext();

  console.log(notesData);
  return (
    <div
      className={`${
        isPinned && "pinned-card"
      } display-notes-card flex-c flex-sb  p-t-md m-t-xl p-md br-md position-r m-md`}
    >
      <div
        onClick={() =>
          setShowNote((showNote) => ({
            shouldShowNote: !showNote.shouldShowNote,
            heading,
            body,
          }))
        }
      >
        <div className="display-notes-card__heading text-md br-md">
          <h2 className="p-b-xs">{heading}</h2>
        </div>
        <div className="display-notes-card__body br-md text-sm">
          <p className="display-notes-card__body--content">{body}</p>
        </div>
      </div>

      <div className="display-notes-card__footer m-t-md flex-r ">
        {!isPinned && (
          <span className="  display-notes-card__footer--date text-sm">
            Created on 07/04/2022
          </span>
        )}
        <div className=" icons-container flex-r ">
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
        <i
          className="card-pin-icon fa-solid fa-map-pin "
          onClick={() => pinNote(note, setNotesData)}
        ></i>
      </div>
    </div>
  );
};

export { DisplayNotesCard };
