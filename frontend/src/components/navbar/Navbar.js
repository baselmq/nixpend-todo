import React, { useContext, useState } from "react";
import "../../css/index.css";
import { PathIcons } from "../../util/PathIcons";
import Popup from "../popup/Popup";
import AddTask from "../cards/AddTask";
import { reloadCxt } from "../../context/reloadCxt";
const Navbar = ({ title }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { setReload } = useContext(reloadCxt);

  const handleAddTask = () => {
    setButtonPopup(false);
    setReload((prev) => !prev);
  };
  return (
    <nav className="navbar-custom d-flex justify-content-between">
      <h4>{title}</h4>
      <div className="d-flex align-items-center gap-3">
        {/* --------------------- button add new task --------------------- */}
        <button
          className="btn-add-new-task"
          onClick={() => setButtonPopup(true)}
        >
          + Add New Task
        </button>
        <span className="menu-dots">{PathIcons.menuDots}</span>
      </div>

      {/* --------------------- Popup card Add Task --------------------- */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <AddTask onAddTask={handleAddTask} />
      </Popup>
    </nav>
  );
};

export default Navbar;
