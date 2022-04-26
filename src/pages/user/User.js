import UserHeader from "../../components/userHeader/UserHeader";
// import UserDashboard from "../userDashboard/UserDashboard";
import "./user.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
// import UserRequests from "../userRequest/UserRequests";

export default function User() {
  const userId = useParams()  
  return (
    
      <div className="user">
        <UserHeader userId = {userId} />
        <div className="userPages">
       To be done
       This is a 
        </div>
      </div>
    
  );
}
