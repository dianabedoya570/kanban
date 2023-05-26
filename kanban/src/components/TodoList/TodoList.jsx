import React from "react";
import { Todotask } from "./Todotask";
import "./todolist.css";

export const TodoList = ({ listTodo = [], removeTask, assignedTask }) => {
  return (
    <div className="list">
      {listTodo.map(function (item) {
        return (
          <Todotask
            textTask={item.task}
            key={item.task}
            removeTask={removeTask}
            assignedTask={assignedTask}
          />
        );
      })}
    </div>
  );
};
//export default TodoList;
