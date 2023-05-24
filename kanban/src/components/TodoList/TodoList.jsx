import React from "react";
import { Todotask } from "./Todotask";
import "./todolist.css";

export const TodoList = ({ task, assigned, state, id }) => {
  return (
    <div className="list">
      <h1>To Do</h1>
      <br></br>
      <Todotask task={task} Assinged={assigned}></Todotask>
    </div>
  );
};
//export default TodoList;
