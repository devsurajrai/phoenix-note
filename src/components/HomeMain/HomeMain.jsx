import "./home-main.css";
import { SideBar } from "../SideBar/SideBar";
import { NoteCard } from "../NoteCard/NoteCard";
import { Search } from "../Search/Search";
import { useAuthContext } from "../../contexts/authContext";
const HomeMain = () => {
  const { auth } = useAuthContext();
  console.log(auth);
  return (
    <div className="home-main">
      <SideBar />
      <div className="main ">
        <Search />
        <NoteCard />
        <section>
          <h3>Your Notes</h3>
          <NoteCard />
          <NoteCard />
        </section>
      </div>
      <div className="right-sidebar ">
        <h3>Pinned Notes</h3>
        <NoteCard pinned={true} />
        <NoteCard pinned={true} />
        <NoteCard pinned={true} />
        <NoteCard pinned={true} />
      </div>
    </div>
  );
};

export { HomeMain };
