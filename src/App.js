import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TasksContainer from "./components/TasksContainer";
import React from "react";

function App() {
  const PORT = 8000;
  const getAllTasksUrl = `http://localhost:${PORT}/allTasks`;

  const [tasks, setTasks] = useState([]);

  let getAllTasks = React.useCallback(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  getAllTasks()

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
      </header>
      <div className="main-div">
        <CreateTask getAllTasks={getAllTasks}/>
        <TasksContainer tasks={tasks} getAllTasks={getAllTasks}/>
      </div>
    </div>
  );
}

export default App;
