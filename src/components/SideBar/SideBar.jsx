import { LoggedInUserInfo } from "./LoggedInUserInfo/LoggedInUserInfo";
import "./side-bar.css";

import { SidebarItem } from "./SidebarItem/SidebarItem";

const SideBar = () => {
  const NOTES_SIDEBAR_LIST_ITEMS = [
    {
      id: 1,
      icon: <i class="fa-solid fa-house"></i>,
      text: "Home",
    },
    {
      id: 2,
      icon: <i class="fa-solid fa-tag"></i>,
      text: "Labels",
    },
    {
      id: 3,
      icon: <i class="fa-solid fa-box-archive"></i>,
      text: "Archive",
    },
    {
      id: 4,
      icon: <i class="fa-solid fa-trash"></i>,
      text: "Trash",
    },
    {
      id: 5,
      icon: <i class="fa-solid fa-user"></i>,
      text: "Profile",
    },
  ];

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
        <button className="button button-secondary no-br p-xs w-p-full m-l-xl ">
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
