import React from "react";
import "./App.css";
//import { TodoList } from "./components/TodoList";

import { TodoList } from "./components/TodoList/TodoList.jsx";
import { Task } from "./components/Task";
import { InProgressList } from "./components/InprogressList/InProgressList";
import { FormToAssignTask } from "./components/InprogressList/FormToAssignTask.jsx";
import { DoneList } from "./components/DoneList/DoneList";
/*const taskList = [
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
];*/
//let index = 1;

function App() {
  //El estado para guardar el valor actual del elemento
  //y el handle para poder actualizar el valor
  const [textTask, setTextTask] = React.useState("");
  const [listTodo, setListTodo] = React.useState([]);
  const [listInprogress, setListInprogress] = React.useState([]);
  const [listDone, setListDone] = React.useState([]);
  const [tasktoAssing, setTaskToAssing] = React.useState({});
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
  };

  const assignedTask = (textTask) => {
    const activeTask = listTodo.filter((item) => item.task === textTask);
    setTaskToAssing(...activeTask);

    //removeTask(textTask);tasktoAssi
  };

  const handleCancel = () => {
    setTaskToAssing({});
  };

  const handleAssignTask = (ntaskIP, assignedN) => {
    let { task, assigned, state } = ntaskIP;
    assigned = assignedN;
    state = "in-progress";
    const taskIP = {
      task,
      assigned,
      state,
    };

    setListInprogress([...listInprogress, taskIP]);
    removeTask(task);
    setTaskToAssing({});
  };
  const handleTaskDone = (textTask) => {
    const taskdone = listInprogress.filter((item) => item.task === textTask);
    setListDone([...listDone, ...taskdone]);
    const taskAux = listInprogress.filter((item) => item.task !== textTask);
    setListInprogress(taskAux);
  };

  return (
    <div className="App">
      <div className="Title">
        <h1>KANBAN BOARD</h1>
      </div>

      <div className="kanbanlist">
        <div className="toDo">
          <h1>To Do</h1>
          <div className="newtask">
            <Task setTextTask={setTextTask} textTask={textTask}></Task>
            <button className="newTask__Button" onClick={createNewTask}>
              New Task
            </button>
          </div>
          <TodoList
            listTodo={listTodo}
            removeTask={removeTask}
            assignedTask={assignedTask}
          ></TodoList>
        </div>
        <div className="inProgress">
          <h1>In Progress </h1>
          <FormToAssignTask
            task={tasktoAssing}
            handleAssignTask={handleAssignTask}
            handleCancel={handleCancel}
          ></FormToAssignTask>
          <InProgressList
            listInprogrress={listInprogress}
            handleTaskDone={handleTaskDone}
          ></InProgressList>
        </div>
        <div className="done">
          <h1>Done </h1>
          <DoneList listDone={listDone}></DoneList>
        </div>
      </div>
    </div>
  );
}

export default App;
