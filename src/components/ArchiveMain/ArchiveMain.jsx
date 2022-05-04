import { useAuthContext } from "../../contexts/authContext";
import { DisplayNotesCard } from "../DisplayNotesCard/DisplayNotesCard";
import { SideBar } from "../SideBar/SideBar";
import "./archive-main.css";
const ArchiveMain = () => {
  const { auth } = useAuthContext();
  console.log(auth.archives);
  return (
    <div className="archive-main">
      <div>
        <SideBar archivePage={true} />
      </div>
      <div className="m-t-xl">
        {auth.archives.map((note) => (
          <DisplayNotesCard key={note._id} note={note} archivePage={true} />
        ))}
      </div>
    </div>
  );
};

export { ArchiveMain };
