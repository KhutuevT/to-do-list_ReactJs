import React, { useState } from "react";
import axios from "axios";
import "./CreateTask.css";

const CreateTask = ({ getAllTasks }) => {
  const PORT = 8000;
  const postCreateTaskUrl = `http://localhost:${PORT}/createTask`;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNewTask = async () => {
    if (title.trim().length !== 0 && text.trim().length !== 0) {
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
    } else {
      alert("Введите данные!");
    }
  };

  return (
    <div className="create-task">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title-input"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text-input"
      />
      <button onClick={() => addNewTask()}>Add</button>
    </div>
  );
};

export default CreateTask;
