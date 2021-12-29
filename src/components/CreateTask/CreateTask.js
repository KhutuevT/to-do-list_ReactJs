import React, { useState } from "react";
import API from "../../controllers/API";
import "./CreateTask.css";

// eslint-disable-next-line react/prop-types
const CreateTask = ({ getAllTasks }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNewTask = async () => {
    if (title.trim().length !== 0 && text.trim().length !== 0) {
      API.addNewTask(title, text).then((res) => {
        getAllTasks();
        setTitle("");
        setText("");
      });
    } else alert("Форма не должна содержать пустые поля!");
  };

  return (
    <div className="create-task">
      <p>Title</p>
      <input
        className="title-input"
        autoComplete="off"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title-input"
      />
      <p>Text</p>
      <textarea
        className="text-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text-input"
      />
      <div className="create-task-buttons">
        <button className="add-task-button" onClick={() => addNewTask()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
