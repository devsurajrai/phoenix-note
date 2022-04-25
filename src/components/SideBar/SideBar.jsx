import { useAuthContext } from "../../contexts/authContext";
import { useColorContext } from "../../contexts/colorContext";
import { useNoteContext } from "../../contexts/noteContext";
import { NOTES_SIDEBAR_LIST_ITEMS } from "../../data/sidebarItems";
import { getDate } from "../../util/util";
import { LoggedInUserInfo } from "./LoggedInUserInfo/LoggedInUserInfo";
import "./side-bar.css";

import { SidebarItem } from "./SidebarItem/SidebarItem";

const SideBar = ({ setIsCreateNewNote }) => {
  const { auth } = useAuthContext();
  const { firstName, lastName } = auth.userInfo;
  const { setCardColor } = useColorContext();
  const { setNote } = useNoteContext();

  console.log(auth);
  return (
    <div className="notes-sidebar p-r-xxl">
      <ul className="notes-sidebar__list p-r-xl">
        {NOTES_SIDEBAR_LIST_ITEMS.map((listItemDetails) => (
          <SidebarItem
            key={listItemDetails.id}
            listItemDetails={listItemDetails}
          />
        ))}
      </ul>
      <div className="sidebar-btn-userinfo flex-c">
        <button
          className="button button-secondary no-br p-xs w-p-full m-l-xl "
          onClick={() => {
            setNote((note) => ({ ...note, createdAt: getDate() }));
            setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote);
          }}
        >
          Create New Note
        </button>
        <LoggedInUserInfo
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
