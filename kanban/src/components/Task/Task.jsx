import React from "react";
import "./task.css";

function Task({ setTextTask, textTask, id }) {
  return (
    <div className="taskCon">
      <label className="task__LName">Task Name:</label>
      <input
        className="task_TName"
        type="text"
        value={textTask}
        onChange={(event) => setTextTask(event.target.value)}
      />
    </div>
  );
}
// onChange recibe una funcion para reemplazar la accion

export default Task;
