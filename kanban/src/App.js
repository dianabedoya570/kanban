import React from "react";
import "./App.css";
//import { TodoList } from "./components/TodoList";

import { TodoList } from "./components/TodoList/TodoList.jsx";
import { Task } from "./components/Task";

const taskList = [
  {
    task: "do the front-End",
    assigned: "no one",
    state: "to-do",
  },
  {
    task: "do the back-End",
    assigned: "none",
    state: "to-do",
  },
];
//let index = 1;

function App() {
  //El estado para guardar el valor actual del elemento
  //y el handle para poder actualizar el valor
  const [textTask, setTextTask] = React.useState("");

  function createNewTask(event) {
    const objTask = {
      task: textTask,
      assigned: "no one",
      state: "to-do",
    };
    taskList.push(objTask);
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>KANBAN BOARD</h1>
      </div>
      <div className="newtask">
        <Task setTextTask={setTextTask} textTask={textTask}></Task>
        <button className="newTask__Button" onClick={createNewTask}>
          New Task
        </button>
      </div>
      <TodoList taskList={taskList}></TodoList>
    </div>
  );
}

export default App;
