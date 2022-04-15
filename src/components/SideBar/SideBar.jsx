import { NOTES_SIDEBAR_LIST_ITEMS } from "../../data/sidebarItems";
import { LoggedInUserInfo } from "./LoggedInUserInfo/LoggedInUserInfo";
import "./side-bar.css";

import { SidebarItem } from "./SidebarItem/SidebarItem";

const SideBar = ({ setIsCreateNewNote }) => {
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
          onClick={() =>
            setIsCreateNewNote((isCreateNewNote) => !isCreateNewNote)
          }
        >
          Create New Note
        </button>
        <LoggedInUserInfo
          userInfo={{
            profileIMG:
              "https://lh3.googleusercontent.com/a-/AOh14Gi1hHx-lQVI3s5YEbxDBAraiXNdBtd9-gC7MYxM=s288-p-rw-no",
            name: "Suraj Rai",
            userID: "devsurajrai",
          }}
        />
      </div>
    </div>
  );
};

export { SideBar };
