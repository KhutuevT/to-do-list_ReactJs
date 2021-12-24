import React, { useState, useEffect } from "react";
import axios from "axios";
import './Task.css'

function Task(props) {
  const PORT = 8000;
  const deleteTasksUrl = `http://localhost:${PORT}/deleteTask`;

  const deleteTask = async () => {
    await axios
      .delete(deleteTasksUrl, { params: { id: props.id } })
      .then((res) => {
        props.getAllTasks()
      });
  };

  return (
    <div className="task-card" key={`task-${props._id}`} style={{backgroundColor: props.color}}>
      <h3>{`${props.title}`}</h3>
      <p>{`${props.text}`}</p>
      <button>Edit</button>
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
}

export default Task;
