import React from "react";
import "./task.css";

function Task({ task, assigned, state, id }) {
  return (
    <div className="task">
      <span>
        <label className="task__LName">Task Name:</label>
        <input className="task_TName" type="text" value={task} />
      </span>
      <span>
        <label className="task__LAssing">Asigned To:</label>
        <input className="task__TAssing" type="text" value={assigned} />
      </span>
    </div>
  );
}
export default Task;
