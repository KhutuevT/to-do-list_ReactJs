/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateTask from './CreateTask';
import TasksContainer from './TasksContainer';
import './Home.css';

const URL = process.env.REACT_APP_LOCAL_URL;
const getAllTasksUrl = `${URL}/allTasks`;

const Home = ({setOpeningTaskId, setOldTitle, setOldText}) => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = React.useCallback(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
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
