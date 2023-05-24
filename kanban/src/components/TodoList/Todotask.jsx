import React from "react";
import { Task } from "../Task";
import { Todobuttons } from "./Todobuttons/Todobuttons.jsx";
import "./todotask.css";

export const Todotask = ({ task, assigned, state, id }) => {
  return (
    <div className="card">
      <Task task={task} Assinged={assigned}></Task>
      <Todobuttons />
    </div>
  );
};
