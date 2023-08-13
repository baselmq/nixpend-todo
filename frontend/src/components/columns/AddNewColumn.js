import React from "react";

const AddNewColumn = ({ setNewColumnName, onAddColumn }) => {
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
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        {/* -------------- create task -------------- */}
        <button
          className="btn-task btn-new-create-task mt-4"
          onClick={onAddColumn}
        >
          Add Column
        </button>
      </div>
    </div>
  );
};

export default AddNewColumn;
