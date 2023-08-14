import axios from "axios";
import React, { useState } from "react";
import "../../css/index.css";

const AddNewColumn = ({ onAddColumn }) => {
  const [newColumnName, setNewColumnName] = useState("");
  const handleAddColumn = async () => {
    if (newColumnName.trim() === "") {
      return;
    }

    try {
      const capital =
        newColumnName.charAt(0).toUpperCase() +
        newColumnName.slice(1).toLowerCase();

      const data = { nameColumn: capital };
      await axios.post(`http://localhost:8000/api/v1/todo/column`, data);
      console.log("added column");
      onAddColumn();
    } catch (error) {
      console.error("Error adding task status:", error);
    }
  };
  return (
    <div className="">
      <div className="d-flex flex-column mt-3">
        <label htmlFor="name_column">Name Column</label>
        <input
          type="text"
          name="name_column"
          className="input-popup mt-1"
          id="name_column"
          placeholder="e.g ToDo"
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        {/* -------------- create task -------------- */}
        <button
          className="btn-task btn-new-create-task mt-4"
          onClick={handleAddColumn}
        >
          Add Column
        </button>
      </div>
    </div>
  );
};

export default AddNewColumn;
