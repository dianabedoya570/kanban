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
  const [listTodo, setListTodo] = React.useState([]);

  const createNewTask = (event) => {
    const objTask = {
      task: textTask,
      assigned: "no one",
      state: "to-do",
    };
    setListTodo([...listTodo, objTask]);
    //console.log(taskList);
    setTextTask("");
  };
  const removeTask = (textTask) => {
    const taskAux = listTodo.filter((item) => item.task !== textTask);
    setListTodo(taskAux);
    console.log("En remove", taskAux);
  };

  const assignedTask = (textTask) => {};

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
      <div className="kanbanlist">
        <TodoList
          listTodo={listTodo}
          removeTask={removeTask}
          assignedTask={assignedTask}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
