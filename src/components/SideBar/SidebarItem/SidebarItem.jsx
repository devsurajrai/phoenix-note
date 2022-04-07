import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ listItemDetails }) => {
  const { icon, text } = listItemDetails;
  let activeStyle = {
    color: "black",
  };

  return (
    <NavLink
      to={`/${text.toLowerCase()}`}
      style={(isActive) => (isActive ? activeStyle : { undefined })}
    >
      <li className="sidebar-item m-tb-xl text-sm flex-r">
        {icon}
        <span className="m-l-xs">{text}</span>
      </li>
    </NavLink>
  );
};

export { SidebarItem };
