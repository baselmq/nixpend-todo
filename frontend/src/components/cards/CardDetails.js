import React, { useState } from "react";
import "./card_task.css";
const CardDetails = ({ data, completedTasks }) => {
  return (
    <div className="card_details">
      <div className="title">{data.title}</div>
      <div className="descriptions">{data.description}</div>
      <div className="subtasks">
        Subtasks ({completedTasks} of {data.subTasks.length})
      </div>
      {data.subTasks.map((item, index) => (
        <SubTitleCard key={index} task={item.task} />
      ))}
      {/* -------------- status -------------- */}
      <div className="d-flex flex-column mt-3">
        <label htmlFor="status">Status</label>
        <select name="status" id="status" className="mt-1">
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
      {/* -------------- create task -------------- */}
      <button className="btn-task btn-new-create-task mt-4">Save</button>
    </div>
  );
};

export default CardDetails;

const SubTitleCard = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="sub-title-card d-flex gap-3 p-2">
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className={isChecked ? "task-text crossed" : "task-text"}>
        {props.task}
      </div>
    </div>
  );
};
