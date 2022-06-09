import "./logged-in-user-info.css";

const LoggedInUserInfo = ({ userInfo, archivePage }) => {
  const { profileIMG, name, userID } = userInfo;
  return (
    <div
      // className={`${
      //   archivePage && "archive-page-user-Info"
      // } user-info flex-r flex-center`}
      className="archive-page-user-Info user-info flex-r flex-center"
    >
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
      {/* <i className="fa-solid fa-arrow-right-from-bracket logout-icon"></i> */}
    </div>
  );
};

export { LoggedInUserInfo };
