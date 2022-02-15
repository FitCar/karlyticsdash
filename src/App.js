import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import UserRequests from "./pages/userRequest/UserRequests";
import Request from "./pages/request/Request";


const test = process.env.REACT_API_KEY

console.log(test)

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userRequests/:userId" element={<UserRequests />} />
          <Route path="/request/:customerId/:requestId" element={<Request />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
