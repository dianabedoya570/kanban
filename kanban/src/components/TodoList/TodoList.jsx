import React from "react";
import { Todotask } from "./Todotask";
import "./todolist.css";

export const TodoList = ({ taskList = [] }) => {
  return (
    <div className="list">
      <h1>To Do</h1>
      <br></br>
      {taskList.map(function (item) {
        return <Todotask textTask={item.task} key={item.task} />;
      })}
    </div>
  );
};
//export default TodoList;
