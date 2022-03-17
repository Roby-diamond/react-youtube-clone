import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <MenuSharpIcon />
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20200820120939"
        alt=""
      />
      <input type="text" />
      <SearchSharpIcon />
      <VideoCallSharpIcon />
      <AppsSharpIcon />
      <NotificationsSharpIcon />
      <Avatar src="https://i.imgur.com/3uvZ7MR.png" alt="Diamond Oath" />
    </div>
  );
}

export default Header;
