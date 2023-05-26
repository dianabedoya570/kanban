import React from "react";
import { DoneTask } from "./DoneTask.jsx";

export const DoneList = ({ listDone = [] }) => {
  return (
    <div className="listInprogress">
      {listDone.map(function (item) {
        console.log("tarea en progreso", item.task);
        return (
          <DoneTask
            textTask={item.task}
            key={item.task}
            assignedName={item.assigned}
          />
        );
      })}
    </div>
  );
};
//export default TodoList;
