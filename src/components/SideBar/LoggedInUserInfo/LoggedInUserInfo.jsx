import "./logged-in-user-info.css";
import React from "react";

const LoggedInUserInfo = ({ userInfo }) => {
  const { profileIMG, name, userID } = userInfo;
  return (
    <div className="user-info flex-r flex-center ">
      <div className="avatar av-s m-r-xs ">
        <img
          className="img-100 full-round"
          src={profileIMG}
          alt="user-avatar"
        />
      </div>
      <div className="flex-c m-l-sm m-r-xxl">
        <span className="text-sm">{name}</span>
        <span className="text-sm">@{userID}</span>
      </div>
      <i class="fa-solid fa-arrow-right-from-bracket "></i>
    </div>
  );
};

export { LoggedInUserInfo };
