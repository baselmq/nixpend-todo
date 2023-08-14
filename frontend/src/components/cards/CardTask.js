import React, { useContext, useState } from "react";
import "../../css/index.css";
import Popup from "../popup/Popup";
import CardDetails from "./CardDetails";
import { reloadCxt } from "../../context/reloadCxt";
const CardTask = ({ data }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { setReload } = useContext(reloadCxt);

  const completedTasks = data.subTasks.filter((task) => task.done);
  const completedTaskCount = completedTasks.length;
  const handleEditTask = () => {
    setButtonPopup(false);
    setReload((prev) => !prev);
  };
  return (
    <>
      <div className="card-task" onClick={() => setButtonPopup(true)}>
        <div className="title">{data.title}</div>
        <div className="sub-tasks">
          {completedTaskCount} of {data.subTasks.length} subtasks
        </div>
      </div>

      {/* --------------------- Popup card Add Task --------------------- */}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CardDetails
          data={data}
          completedTasks={completedTaskCount}
          onEditTask={handleEditTask}
        />
      </Popup>
    </>
  );
};

export default CardTask;
