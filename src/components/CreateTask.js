import React, { useState, useEffect } from "react";
import { TwitterPicker } from "react-color";
import axios from "axios";
import "./CreateTask.css";

const CreateTask = ({ getAllTasks }) => {
  const PORT = 8000;
  const postCreateTaskUrl = `http://localhost:${PORT}/createTask`;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNewTask = async () => {
    await axios
      .post(postCreateTaskUrl, {
        title,
        text,
        isCheck: false,
      })
      .then((res) => {
        getAllTasks();
        setTitle("");
        setText("");
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

      <button onClick={() => addNewTask()}>Add</button>

    </div>
  );
};

export default CreateTask;
