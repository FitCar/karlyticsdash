import "./topBar.css";
import { IoNotificationsSharp } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <span className="topBarLogoText">KarLytics</span>
      </div>
      <div className="topBarRight">
        <div className="topBarIconContainer">
          <IoNotificationsSharp />
        </div>
      </div>
    </div>
  );
}
