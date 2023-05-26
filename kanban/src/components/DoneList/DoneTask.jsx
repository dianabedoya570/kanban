import React from "react";

export const DoneTask = ({ textTask, assignedName }) => {
  return (
    <div className="inprogress">
      <label className="task__LName">Task Name:</label>
      <label className="task_TName">{textTask}</label>
      <br></br>
      <label className="task__LAssigned">Assigned to:</label>
      <label className="task_TAssigned">{assignedName}</label>
    </div>
  );
};
