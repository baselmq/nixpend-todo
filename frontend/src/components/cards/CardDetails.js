import React, { useContext, useState } from "react";
import axios from "axios";
import "../../css/index.css";
import { statusCxt } from "../../context/statusCxt";
import { PathIcons } from "../../util/PathIcons";

const SubTitleCard = ({ task, done, onDoneChange }) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onDoneChange(newChecked);
  };

  return (
    <div
      className={`sub-title-card d-flex gap-3 p-2 ${
        isChecked ? "crossed" : ""
      }`}
    >
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="task-text">{task}</div>
    </div>
  );
};

const CardDetails = ({ data, completedTasks, onEditTask }) => {
  const [subTasks, setSubTasks] = useState(data.subTasks);
  const { status } = useContext(statusCxt);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/todo/${data._id}`);
      console.log("Task deleted");
      onEditTask();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStatus = e.target.status.value;
    const newData = {
      ...data,
      status: newStatus,
    };

    try {
      if (data.status === newStatus) {
        await axios.patch(
          `http://localhost:8000/api/v1/todo/${data._id}`,
          newData
        );
        console.log("Task status updated");
      } else {
        await axios.delete(`http://localhost:8000/api/v1/todo/${data._id}`);
        await axios.post(`http://localhost:8000/api/v1/todo`, {
          nameColumn: newStatus,
          ...newData,
        });
      }
      onEditTask();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleSubTaskDoneChange = (index, done) => {
    const updatedSubTasks = [...subTasks];
    updatedSubTasks[index].done = done;
    setSubTasks(updatedSubTasks);
  };

  return (
    <div className="card_details">
      <div className="d-flex justify-content-between align-items-center">
        <div className="title">{data.title}</div>
        <div className="dropdown custom-dropdown">
          <button
            className="d-flex"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {PathIcons.menuDots}
          </button>
          <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
            <li>
              <div
                className="dropdown-item custom-delete"
                onClick={handleDelete}
              >
                Delete
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="descriptions">{data.description}</div>
      <form onSubmit={handleSubmit}>
        <div className="subtasks">
          Subtasks ({completedTasks} of {subTasks.length})
        </div>
        {subTasks.map((item, index) => (
          <SubTitleCard
            key={index}
            task={item.task}
            done={item.done}
            onDoneChange={(done) => handleSubTaskDoneChange(index, done)}
          />
        ))}
        <div className="d-flex flex-column mt-3">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" className="mt-1">
            {status.map((option, index) => (
              <option
                key={index}
                value={option.title}
                className="text-capitalize"
              >
                {option.title}
              </option>
            ))}
          </select>
        </div>
        <button className="btn-task btn-new-create-task mt-4">Save</button>
      </form>
    </div>
  );
};

export default CardDetails;
