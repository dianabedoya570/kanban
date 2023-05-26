import React from "react";
import "./inprogresstask.css";
export const InProgressTask = ({ textTask, assignedName, handleTaskDone }) => {
  return (
    <div className="inprogress">
      <span className="name">
        <label className="task__LName">Task Name:</label>
        <label className="task_TName">{textTask}</label>
      </span>

      <span className="assign">
        <label className="task__LAssigned">Assigned to:</label>
        <label className="task_TAssigned">{assignedName}</label>
      </span>

      <button className="button_Done" onClick={() => handleTaskDone(textTask)}>
        Task Done
      </button>
    </div>
  );
};
