/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../controllers/API";
import "./Edit.css";

const Edit = ({ openingTaskId, oldTitle, oldText }) => {
  const [title, setTitle] = useState(oldTitle);
  const [text, setText] = useState(oldText);
  const loaction = useLocation();
  const path = loaction.pathname;
  const id = path.slice(6);

  const getOneTask = async () => {
    API.getOneTask(id).then((res) => {
      if (title.trim().length === 0 || text.trim().length) {
        setTitle(res.data.data.title);
        setText(res.data.data.text);
      }
    });
  };

  useEffect(async () => {
    getOneTask();
  }, []);

  const editTask = async () => {
    if (
      (openingTaskId.trim().length !== 0) &
      (title.trim().length !== 0) &
      (text.trim().length !== 0)
    ){
      API.updateTask(openingTaskId, title, text);
    } else alert("Форма не должна содержать пустые поля!");
  };

  return (
    <div className="main-edit-task-div">
      <div className="edit-task">
        <p>Title</p>
        <input
          className="title-input"
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
        <Link to="/home">
          <div className="create-task-buttons">
            <button className="edit-task-button" onClick={() => editTask()}>
              Edit
            </button>
            <button className="cancel-button">Cancel</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
