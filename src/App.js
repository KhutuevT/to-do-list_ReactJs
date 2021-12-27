import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CreateTask from "./components/CreateTask";
import TasksContainer from "./components/TasksContainer";
import EditModalWindow from "./components/EditModalWindow";
import React from "react";

const App = () => {
  const PORT = 8000;
  const getAllTasksUrl = `http://localhost:${PORT}/allTasks`;

  const [tasks, setTasks] = useState([]);

  //Состаяние модального окна Edit
  const [editOpen, seteditOpen] = useState(false);

  const [oldTitle, setOldTitle] = useState("");
  const [oldText, setOldText] = useState("");

  const getAllTasks = React.useCallback(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  const oldTitleChange = (title) => {
    setOldTitle(title)
  }
  const oldTextChange = (text) => {
    setOldText(text)
  }

  const editModalWindowChange = (isOpen) => {
    seteditOpen(isOpen);
  };

  const editModelWindowClose = () => {
    seteditOpen(false);
    console.log(editOpen);
  };

  //TODO переделать это временное решение
  useEffect(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  //TODO понять как правильно передать в модальное окно данные (через гет элемент или как то в editOpen)

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
      </header>

      <div className="main-div">
        <CreateTask getAllTasks={getAllTasks} />
        {editOpen ? (
          <div>
            {" "}
            <EditModalWindow
              id={editOpen}
              getAllTasks={getAllTasks}
              editModalWindowChange={editModalWindowChange}
              oldTitle = {oldTitle}
              oldText = {oldText}
            />{" "}
            <div className="cover" onClick={editModelWindowClose} />{" "}
          </div>
        ) : null}
        <TasksContainer
          tasks={tasks}
          getAllTasks={getAllTasks}
          editModalWindowChange={editModalWindowChange}
          oldTitleChange = {oldTitleChange}
          oldTextChange = {oldTextChange}
        />
      </div>
    </div>
  );
};

export default App;
