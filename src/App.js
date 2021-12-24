import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TasksContainer from "./components/TasksContainer";
import React from "react";

const App = () => {
  const PORT = 8000;
  const getAllTasksUrl = `http://localhost:${PORT}/allTasks`;

  const [tasks, setTasks] = useState([]);

  const getAllTasks = React.useCallback(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  //TODO переделать это временное решение
  useEffect(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
      </header>
      <div className="main-div">
        <CreateTask getAllTasks={getAllTasks} />
        <TasksContainer tasks={tasks} getAllTasks={getAllTasks} />
      </div>
    </div>
  );
};

export default App;
