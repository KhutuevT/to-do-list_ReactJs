import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import "./TasksContainer.css";

function TasksContainer(props) {
  const PORT = 8000;
  const getAllTasksUrl = `http://localhost:${PORT}/allTasks`;

  // const [tasks, setTasks] = useState([]);

  // useEffect(async () => {
  //   await axios.get(getAllTasksUrl).then((res) => {
  //     setTasks(res.data.data);
  //   });
  // }, [props.taskCount]);

  return (
    <div className="tasks-container">
      {props.tasks.map((task, index) => (
        <Task
          title={task.title}
          text={task.text}
          id={task._id}
          color={task.color}
          getAllTasks={props.getAllTasks}
        />
      ))}
    </div>
  );
}

export default TasksContainer;
