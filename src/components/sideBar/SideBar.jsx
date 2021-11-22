import "./sideBar.css";
import { LineStyle } from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Main Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyle />
              Home
            </li>
            <li className="sideBarListItem">
              <LineStyle />
              Clients
            </li>
            <li className="sideBarListItem">
              <LineStyle />
              Service Providers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
