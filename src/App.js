import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <TopBar />

      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
