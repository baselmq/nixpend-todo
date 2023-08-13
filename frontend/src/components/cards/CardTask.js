import React, { useState } from "react";
import "./card_task.css";
import Popup from "../popup/Popup";
import CardDetails from "./CardDetails";
const CardTask = ({ data }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const completedTasks = data.subTasks.filter((task) => task.done);
  const completedTaskCount = completedTasks.length;

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
        <CardDetails data={data} completedTasks={completedTaskCount} />
      </Popup>
    </>
  );
};

export default CardTask;
