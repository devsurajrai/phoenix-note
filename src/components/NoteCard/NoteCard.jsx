import "./note-card.css";

const NoteCard = ({ pinned }) => {
  console.log(pinned);
  return (
    <div
      className={`${
        pinned && "pinned-card"
      } note-card  flex-c p-t-md m-t-xl p-md br-md position-r`}
    >
      <input
        className="note-card__heading text-md br-md"
        type="text"
        placeholder="Enter Heading"
      />
      <textarea
        className="note-card__textarea br-md"
        placeholder="Start writing your note here ..."
      ></textarea>
      <div className="note-card__footer flex-r flex-sb">
        <span className="  note-card__footer--date text-sm">
          Created on 07/04/2022
        </span>
        <div className="flex-r flex-center">
          <div className="note-card__footer--icons flex-r flex-sb">
            <i className="fa-solid fa-palette note-card-icon"></i>
            <i className="fa-solid fa-tag note-card-icon"></i>
            <i className="fa-solid fa-box-archive note-card-icon"></i>
            <i className="fa-solid fa-trash note-card-icon"></i>
          </div>
          {!pinned && (
            <button className="button button-secondary btn-sm m-l-md ">
              Add Note
            </button>
          )}
        </div>
        <i className="card-pin-icon fa-solid fa-map-pin "></i>
      </div>
    </div>
  );
};

export { NoteCard };
