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
const baseURL = "https://api-todo-list-k6yy.onrender.com";

function App() {
  //El estado para guardar el valor actual del elemento
  //y el handle para poder actualizar el valor
  const [textTask, setTextTask] = React.useState("");
  const [listTodo, setListTodo] = React.useState([]);
  const [listInprogress, setListInprogress] = React.useState([]);
  const [listDone, setListDone] = React.useState([]);
  const [tasktoAssing, setTaskToAssing] = React.useState({});
  const [showForm, setShowForm] = React.useState(false);

  async function loadKanban() {
    try {
      const response = await fetch(`${baseURL}/tasks`);
      if (response.ok) {
        const tasks = await response.json();
        const toDo = tasks
          .map(function (element) {
            if (element.state === "to-do") {
              return element;
            } else {
              return null;
            }
          })
          .filter(function (element) {
            return element !== null;
          });

        const progress = tasks
          .map(function (element) {
            if (element.state === "in-progress") {
              return element;
            } else {
              return null;
            }
          })
          .filter(function (element) {
            return element !== null;
          });

        const done2 = tasks
          .map(function (element) {
            if (element.state === "done") {
              return element;
            } else {
              return null;
            }
          })
          .filter(function (element) {
            return element !== null;
          });

        setListTodo(toDo);
        setListInprogress(progress);
        setListDone(done2);
      }
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(function () {
    loadKanban();
  }, []);

  const createNewTask = async (event) => {
    const objTask = {
      task: textTask,
      assigned: "no one",
      state: "to-do",
    };

    try {
      const response = await fetch(`${baseURL}/tasks`, {
        ///////////////////////////////////////1
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objTask),
      });

      if (response.ok) {
        const newTask = await response.json();

        setListTodo([...listTodo, newTask]);
        setTextTask("");
      }
    } catch (error) {
      console.error(error);
    }
    // setListTodo([...listTodo, objTask]);
    //console.log(taskList);
    //setTextTask("");
  };

  const removeTask = async (textTask) => {
    const taskAux = listTodo.filter((item) => item.task === textTask);
    const { id } = taskAux[0];

    // setListTodo(taskAux);

    try {
      const response = await fetch(`${baseURL}/tasks/${id}`, {
        ///////////////////////////////////////1
        method: "DELETE",
      });

      if (response.ok) {
        const taskAux2 = listTodo.filter((item) => item.task !== textTask);
        setListTodo(taskAux2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const assignedTask = (textTask) => {
    const activeTask = listTodo.filter((item) => item.task === textTask);
    setTaskToAssing(...activeTask);
    setShowForm(true);
    //removeTask(textTask);tasktoAssi
  };

  const handleCancel = () => {
    setTaskToAssing({});
  };

  const handleAssignTask = async (ntaskIP, assignedN, setAssigned) => {
    let { id, task, assigned, state } = ntaskIP;
    assigned = assignedN;
    state = "in-progress";
    const taskIP = {
      task,
      assigned,
      state,
    };

    try {
      const response = await fetch(`${baseURL}/tasks/${id}`, {
        ///////////////////////////////////////1
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskIP),
      });

      if (response.ok) {
        ///////////
        setListInprogress([...listInprogress, taskIP]);
        //removeTask(task);
        const taskAux = listTodo.filter((item) => item.task !== task);
        setListTodo(taskAux);

        setTaskToAssing({});
        setAssigned("");
        setShowForm(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTaskDone = async (textTask) => {
    const taskdone = listInprogress.filter((item) => item.task === textTask);
    console.log(taskdone.id);
    console.log(taskdone);
    // setListDone([...listDone, ...taskdone]);
    //const taskAux = listInprogress.filter((item) => item.task !== textTask);
    // setListInprogress(taskAux);

    let { id, task, assigned, state } = taskdone[0];

    state = "done";
    const taskD = {
      task,
      assigned,
      state,
    };

    try {
      const response = await fetch(`${baseURL}/tasks/${id}`, {
        ///////////////////////////////////////1
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskD),
      });

      if (response.ok) {
        ///////////
        setListDone([...listDone, ...taskdone]);
        const taskAux = listInprogress.filter((item) => item.task !== textTask);
        setListInprogress(taskAux);
      }
    } catch (error) {
      console.error(error);
    }
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
          {showForm && (
            <FormToAssignTask
              task={tasktoAssing}
              handleAssignTask={handleAssignTask}
              handleCancel={handleCancel}
            ></FormToAssignTask>
          )}
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
