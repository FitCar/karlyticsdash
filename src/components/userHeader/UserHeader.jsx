import { Link } from "react-router-dom";
import "./userHeader.css";

export default function UserHeader({userId}) {

  console.log(userId)
  return (
    <div className="userHeader">
      <ul className="userHeaderButtonsList">
        <Link to="/userDashboard">
          <div className="userHeaderButtons">
            <li>Dashboard</li>
          </div>
        </Link>
        <Link to={"/userRequests/" + userId.userId}>
          <div className="userHeaderButtons">
            <li>Requests</li>
          </div>
        </Link>
        <div className="userHeaderButtons">
          <li>Messages</li>
        </div>
        <div className="userHeaderButtons">
          <li>Vehicles</li>
        </div>
        <div className="userHeaderButtons">
          <li>Vault</li>
        </div>
        <div className="userHeaderButtons">
          <li>Payment</li>
        </div>
      </ul>
    </div>
  );
}
