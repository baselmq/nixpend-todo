import React, { useState } from "react";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../css/index.css";
import ItemSide from "./ItemSide";
import { Link, useLocation } from "react-router-dom";
import { PathIcons } from "../../util/PathIcons";
import DarkMode from "../dark_mode/DarkMode";

const Sidebar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const location = useLocation(); // Get the current location

  const handleSidebarToggle = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  return (
    <>
      <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <div className="menu-content">
          <ul className="menu-items">
            <div className="menu-title">ALL BOARDS</div>

            <ItemSide
              text={"Platform Launch"}
              to={"/"}
              active={location.pathname === "/"}
            />
            <ItemSide
              text={"Marketing Plan"}
              to={"/marketing-plan"}
              active={location.pathname === "/marketing-plan"}
            />
            <ItemSide
              text={"Roadmap"}
              to={"/roadmap"}
              active={location.pathname === "/roadmap"}
            />

            <li className={"item new-board"}>
              <Link to={"#"} className="d-flex align-items-center gap-3">
                {PathIcons.layoutFluidNew}
                <span>{"+ Create New Board"}</span>
              </Link>
            </li>
          </ul>
          {/* bottom  */}
          <ul className="menu-items-bottom">
            <div className="theme-toggle">
              <img src={sun} alt="sun" className="theme-icon-sun" />
              <DarkMode />
              <img src={moon} alt="moon" className="theme-icon-moon" />
            </div>

            <div className="hide-sidebar mt-3" onClick={handleSidebarToggle}>
              {PathIcons.eyeSlash}Hide Sidebar
            </div>
          </ul>
        </div>
      </nav>
      {isSidebarClosed && (
        <div className="open-sidebar mt-3" onClick={handleSidebarToggle}>
          {PathIcons.eye}
        </div>
      )}
    </>
  );
};

export default Sidebar;
