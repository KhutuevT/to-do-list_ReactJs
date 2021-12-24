import React, { useState, useEffect } from "react";
import axios from "axios";
import './Task.css'

const Task = ({getAllTasks, title, text, id, isCheck}) => {
  const PORT = 8000;
  const deleteTasksUrl = `http://localhost:${PORT}/deleteTask`;

  const deleteTask = async () => {
    await axios
      .delete(deleteTasksUrl, { params: { id: id } })
      .then((res) => {
        getAllTasks()
      });
  };

  return (
    <div className="task-card" key={`task-${id}`}>
      <h3>{`${title}`}</h3>
      <p>{`${text}`}</p>
      <button>Edit</button>
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
}

export default Task;
