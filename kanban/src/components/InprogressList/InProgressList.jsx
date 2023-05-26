import React from "react";
import { InProgressTask } from "./InProgressTask";

import "./inprogresslist.css";

export const InProgressList = ({ listInprogrress = [], handleTaskDone }) => {
  return (
    <div className="listInprogress">
      {listInprogrress.map(function (item) {
        console.log("tarea en progreso", item.task);
        return (
          <InProgressTask
            textTask={item.task}
            key={item.task}
            assignedName={item.assigned}
            handleTaskDone={handleTaskDone}
          />
        );
      })}
    </div>
  );
};
//export default TodoList;
