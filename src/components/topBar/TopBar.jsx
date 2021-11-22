import "./topBar.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <span className="topBarLogoText">KarLytics</span>
      </div>
      <div className="topBarRight">
        <div className="topBarIconContainer">
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
