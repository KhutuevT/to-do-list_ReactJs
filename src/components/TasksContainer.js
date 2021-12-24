import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import "./TasksContainer.css";

const TasksContainer = ({tasks, getAllTasks}) => {
  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <Task key={`task-${index}`}
          title={task.title}
          text={task.text}
          id={task._id}
          isCheck = {task.isCheck}
          getAllTasks={getAllTasks}
        />
      ))}
    </div>
  );
}

export default TasksContainer;
