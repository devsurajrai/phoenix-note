// import { useNotesDataContext } from "../../contexts/notesDataContext";
import { useAuthContext } from "../../contexts/authContext";
import { useNoteContext } from "../../contexts/noteContext";
import { useShowNoteContext } from "../../contexts/showNotesContext";
import { editNote, pinNote } from "../../util/util";
import { Tag } from "../components";
import "./display-notes-card.css";

const DisplayNotesCard = ({
  note,
  setShowNote,
  setIsCreateNewNote,
  setIsEditing,
}) => {
  const { heading, body, isPinned, _id, color, createdAt, tags } = note;
  const { auth, authDispatch, userToken } = useAuthContext();
  const { setNote } = useNoteContext();

  return (
    <div
      style={{ backgroundColor: `${color}` }}
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
        <div className="tags p-l-xs">
          {note.tags.map((tagInfo) => {
            return (
              <Tag key={tagInfo} tagName={tagInfo[0]} tagColor={tagInfo[1]} />
            );
          })}
        </div>
        <div className="display-notes-card__heading text-md br-md">
          <h2 className="p-b-xs">{heading}</h2>
        </div>
        <div className="display-notes-card__body br-md text-sm">
          <p
            style={{ width: "96%" }}
            className="display-notes-card__body--content"
          >
            {body}
          </p>
        </div>
      </div>

      <div className="display-notes-card__footer m-t-md flex-r ">
        {!isPinned && (
          <span className="  display-notes-card__footer--date text-sm">
            Created on {createdAt}
          </span>
        )}
        <div className=" icons-container flex-r ">
          <div className="display-notes-card__footer--icons flex-r flex-sb">
            <i className="fa-solid fa-palette display-notes-card-icon"></i>
            <i className="fa-solid fa-tag display-notes-card-icon"></i>
            <i className="fa-solid fa-box-archive display-notes-card-icon"></i>
            <i className="fa-solid fa-trash display-notes-card-icon"></i>
          </div>
          <button
            className="button button-secondary btn-sm m-l-md
          "
            onClick={() =>
              editNote(
                auth.notes,
                authDispatch,
                _id,
                userToken,
                setNote,
                setIsCreateNewNote,
                setIsEditing
              )
            }
          >
            Edit Note
          </button>
        </div>
        <i
          className="card-pin-icon fa-solid fa-map-pin"
          onClick={() => pinNote(auth.notes, authDispatch, _id, userToken)}
        ></i>
      </div>
    </div>
  );
};

export { DisplayNotesCard };
