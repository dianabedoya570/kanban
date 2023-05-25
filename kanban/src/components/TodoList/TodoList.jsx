import React from "react";
import { Todotask } from "./Todotask";
import "./todolist.css";

export const TodoList = ({ listTodo = [], removeTask, assignedTask }) => {
  console.log("en todo" + listTodo);
  return (
    <div className="list">
      <h1>To Do</h1>
      <br></br>

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
