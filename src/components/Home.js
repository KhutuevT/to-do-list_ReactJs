/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';
import TasksContainer from './TasksContainer';
import API from "../controllers/API";
import './Home.css';

const Home = ({setOpeningTaskId, setOldTitle, setOldText}) => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = React.useCallback(async () => {
    API.getAllTasks().then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  useEffect(async () => {
    getAllTasks();
  }, []);

  return (
    <div className="main-div">
      <CreateTask getAllTasks={getAllTasks} />
      <TasksContainer
        tasks={tasks}
        getAllTasks={getAllTasks}
        setOpeningTaskId = {setOpeningTaskId}
        oldTitleChange={setOldTitle}
        oldTextChange={setOldText}
      />
    </div>
  );
};

export default Home;
