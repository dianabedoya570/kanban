import "./App.css";
//import { TodoList } from "./components/TodoList";
import { Task } from "./components/Task";
import { TodoList } from "./components/TodoList/TodoList.jsx";

function App() {
  return (
    <div className="App">
      <h1>KANBAN BOARD</h1>
      <TodoList
        task={"do the front-End"}
        assigned={"none"}
        state={"to-do"}
      ></TodoList>
    </div>
  );
}

export default App;
