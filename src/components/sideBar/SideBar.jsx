import "./sideBar.css";
// import { LineStyle } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Main Menu</h3>
          <ul className="sideBarList">
            <Link to="/">
              <li className="sideBarListItem">
                Home
              </li>
            </Link>

            <Link to="/userList">
              <li className="sideBarListItem">
                Clients
              </li>
            </Link>
            
            <li className="sideBarListItem">
              Service Providers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
