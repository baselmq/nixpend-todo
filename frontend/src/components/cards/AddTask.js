import React, { useState } from "react";
import "./add_task.css";
import SubTaskInput from "./SubTaskInput";
import useAddTask from "../../hooks/useAddTask";
const AddTask = () => {
  const [subtasks, setSubtasks] = useState([]);
  const { createTask, loading, error } = useAddTask();

  const addNewSubtask = () => {
    const newSubtask = { task: "", done: false };
    setSubtasks([...subtasks, newSubtask]);
  };

  const updateSubtask = (index, value) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index].task = value;
    setSubtasks(updatedSubtasks);
  };

  const removeSubtask = (indexToRemove) => {
    const updatedSubtasks = subtasks.filter(
      (_, index) => index !== indexToRemove
    );
    setSubtasks(updatedSubtasks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const status = e.target.status.value;

    const data = {
      nameColumn: status,
      title: title,
      description: description,
      status: status,
      subTasks: subtasks,
      date: Date(),
    };
    try {
      const response = await createTask(data);

      // Handle success, display a message, redirect, etc.
      console.log("Task created successfully:", response);
    } catch (error) {
      // Handle error, display an error message, etc.
      console.error("Error creating task:", error);
    }
  };
  return (
    <div>
      <h5 className="">Add New Task</h5>

      <form className="form-add-task" onSubmit={handleSubmit}>
        {/* -------------- title -------------- */}
        <div className="d-flex flex-column mt-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="input-popup mt-1"
            id="title"
            placeholder="e.g Take coffee break"
          />
        </div>

        {/* -------------- description -------------- */}
        <div className="d-flex flex-column mt-3">
          <label htmlFor="description">Description</label>

          <textarea
            type="text"
            name="description"
            className="textarea-popup mt-1"
            id="description"
            placeholder="e.g it's always good to take a break. This 15 minute break will recharge the body a little"
          />
        </div>

        {/* -------------- subtask -------------- */}
        <div className="d-flex flex-column mt-3">
          <label htmlFor="subtasks">Subtasks</label>
          {subtasks.map((subtask, index) => (
            <SubTaskInput
              key={index}
              value={subtask.task}
              onChange={(value) => updateSubtask(index, value)}
              onRemove={() => removeSubtask(index)}
            />
          ))}

          <div className="btn-task btn-new-subtask" onClick={addNewSubtask}>
            + Add New Subtask
          </div>
        </div>

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
        <button className="btn-task btn-new-create-task mt-4">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
