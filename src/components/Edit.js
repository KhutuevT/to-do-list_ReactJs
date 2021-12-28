/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Edit.css';

const URL = process.env.REACT_APP_LOCAL_URL;
const patchUpdateTaskUrl = `${URL}/updateTask`;

const Edit = ({
  openingTaskId,
  oldTitle,
  oldText,
}) => {
  const [title, setTitle] = useState(oldTitle);
  const [text, setText] = useState(oldText);

  const editTask = async () => {
    if (title.trim().length !== 0 && text.trim().length !== 0) {
      await axios
          .patch(patchUpdateTaskUrl, {
            id: openingTaskId,
            title,
            text,
          });
    } else {
      alert('Введите данные!');
    }
  };

  return (
    <div className="main-edit-task-div">
      <div className="edit-task">
        <p>Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title-input"
        />
        <p>Text</p>
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="text-input"
        />
        <Link to="/home">
          <button onClick={() => editTask()}>Edit</button>
          <button>Cancel</button>
        </ Link>
      </div>
    </div>

  );
};

export default Edit;
