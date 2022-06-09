import { useAuthContext } from "../../contexts/authContext";
import { useColorContext } from "../../contexts/colorContext";
import { useNoteContext } from "../../contexts/noteContext";
import { NOTES_SIDEBAR_LIST_ITEMS } from "../../data/sidebarItems";
import { getDate } from "../../util/util";
import { LoggedInUserInfo } from "./LoggedInUserInfo/LoggedInUserInfo";
import "./side-bar.css";

import { SidebarItem } from "./SidebarItem/SidebarItem";

const SideBar = ({ setIsCreateNewNote, archivePage }) => {
  const { auth } = useAuthContext();
  const { firstName, lastName } = auth.userInfo;
  const { setNote } = useNoteContext();
  return (
    <div className="notes-sidebar p-r-xxl flex-c flex-sb">
      <div>
        <ul
          className={`${
            archivePage && "padding-l-0"
          } notes-sidebar__list p-r-xl`}
        >
          {NOTES_SIDEBAR_LIST_ITEMS.map((listItemDetails) => (
            <SidebarItem
              key={listItemDetails.id}
              listItemDetails={listItemDetails}
            />
          ))}
        </ul>
        {!archivePage && (
          <button
            className="button button-secondary no-br p-xs w-p-full m-l-xl "
            onClick={() => {
              setNote((note) => ({ ...note, createdAt: getDate() }));
              setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
            }}
          >
            Create New Note
          </button>
        )}
      </div>

      <div
        className="
           sidebar-btn-userinfo flex-c"
      >
        <LoggedInUserInfo
          archivePage={archivePage}
          userInfo={{
            profileIMG:
              "https://lh3.googleusercontent.com/a-/AOh14Gi1hHx-lQVI3s5YEbxDBAraiXNdBtd9-gC7MYxM=s288-p-rw-no",
            name: `${firstName} ${lastName}`,
            userID: `${firstName}${lastName}`,
          }}
        />
      </div>
    </div>
  );
};

export { SideBar };
