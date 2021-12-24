import React, { useState, useEffect } from "react";
// import { GithubPicker } from 'react-color';
import axios from "axios";

function CreateTask(props) {
  const PORT = 8000;
  const postCreateTaskUrl = `http://localhost:${PORT}/createTask`;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const addNewTask = async () => {
    await axios
      .post(postCreateTaskUrl, {
        title,
        text,
        color,
        isCheck: false,
      })
      .then((res) => {
        props.getAllTasks()
      });
  };

  return (
    <div className="ctreate-task">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title-input"
      ></input>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text-input"
      ></input>
      <input
        type="color"
        value="#e66465"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
      {/* <GithubPicker /> */}
      <button onClick={() => addNewTask()}>Add</button>
    </div>
  );
}

export default CreateTask;
