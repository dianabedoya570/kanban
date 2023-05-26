import React from "react";

import "./todotask.css";

export const Todotask = ({ textTask, removeTask, assignedTask }) => {
  return (
    <div className="card">
      <span className=" taskField ">
        <label className="task__LName">Task Name:</label>
        <label className="task_TName">{textTask}</label>
      </span>
      <div>
        <button
          className="todo__button__Assing"
          onClick={() => assignedTask(textTask)}
        >
          Go to Assign
        </button>
        <button
          className="todo__button_Remove"
          onClick={() => removeTask(textTask)}
        >
          Remove Task
        </button>
      </div>
    </div>
  );
};
