import React from "react";
import "./todobuttons.css";
export const Todobuttons = ({ id }) => {
  return (
    <div className="todobuttons">
      <button className="todo__button__Assing">Assign</button>
      <button className="todo__button_Remove">Remove</button>
    </div>
  );
};
