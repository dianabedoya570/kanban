import React from "react";
import "./formtoassigntask.css";
export const FormToAssignTask = ({ task, handleAssignTask, handleCancel }) => {
  const [assigned, setAssigned] = React.useState("");

  return (
    <React.Fragment>
      <div className="task_IPT">
        <label className="taskIPT__LName">Task Name:</label>

        <label className="taskIPT_TName">{task.task}</label>
        <br />
        <label className="taskIPT__LAssigned">Assigned to:</label>
        <input
          className="taskIPT_TAssigned"
          type="text"
          value={assigned}
          onChange={(event) => setAssigned(event.target.value)}
        />

        <div className="task_IPT_button">
          <button
            className="button__toAssing"
            onClick={() => handleAssignTask(task, assigned, setAssigned)}
          >
            Assing
          </button>
          <button className="button_cancel" onClick={() => handleCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
