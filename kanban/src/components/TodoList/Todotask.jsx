import React from "react";

import "./todotask.css";

export const Todotask = ({ textTask, removeTask, assignedTask }) => {
  return (
    <div className="card">
      <label className="task__LName">Task Name:</label>
      <label className="task_TName">{textTask}</label>
      <button
        className="todo__button__Assing"
        onClick={() => assignedTask(textTask)}
      >
        Assign
      </button>
      <button
        className="todo__button_Remove"
        onClick={() => removeTask(textTask)}
      >
        Remove
      </button>
    </div>
  );
};
