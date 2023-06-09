import { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import FAQ from "./pages/FAQ";
import Calendar from "./pages/Calendar";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const [toggled, setToggled] = useState(false);
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const toggleSideCollapsed = useCallback(() => {
    setSideCollapsed((collapsed) => !collapsed);
  }, [setSideCollapsed]);

  const toggle = () => {
    setToggled(!toggled);
    if (toggled) {
      toggleSideCollapsed();
    } else {
      toggleSideCollapsed();
    }
  };

  return (
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Router>
        <SideBar
          setCurrentPage={setCurrentPage}
          toggleSideCollapsed={toggleSideCollapsed}
          sideCollapsed={sideCollapsed}
        />
        <Routes>
          <Route
            path="/"
            element={<Home toggle={toggle} toggled={toggled} />}
          />
          <Route
            path="/team"
            element={<Team toggle={toggle} toggled={toggled} />}
          />
          <Route
            path="/contacts"
            element={<Contacts toggle={toggle} toggled={toggled} />}
          />
          <Route
            path="/profile"
            element={<Profile toggle={toggle} toggled={toggled} />}
          />
          <Route
            path="/faq"
            element={<FAQ toggle={toggle} toggled={toggled} />}
          />
          <Route
            path="/calendar"
            element={<Calendar toggle={toggle} toggled={toggled} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
