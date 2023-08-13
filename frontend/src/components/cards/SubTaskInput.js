import React from "react";
import { PathIcons } from "../../util/PathIcons";

const SubTaskInput = ({ value, onChange, onRemove }) => {
  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="input-popup mt-1 flex-grow-1"
        placeholder="e.g Make Coffee"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="btn-remove-subtask ms-3 mt-2 me-1" onClick={onRemove}>
        {PathIcons.close}
      </span>
    </div>
  );
};

export default SubTaskInput;
