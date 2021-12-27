/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import axios from 'axios';
import './EditModalWindow.css';

const URL = process.env.REACT_APP_LOCAL_URL;

const EditModalWindow = ({
  id,
  getAllTasks,
  editModalWindowChange,
  oldTitle,
  oldText,
}) => {
  const [title, setTitle] = useState(oldTitle);
  const [text, setText] = useState(oldText);

  const patchUpdateTaskUrl = `${URL}/updateTask`;

  const editTask = async () => {
    if (title.trim().length !== 0 && text.trim().length !== 0) {
      await axios
          .patch(patchUpdateTaskUrl, {
            id,
            title,
            text,
          })
          .then(() => {
            getAllTasks();
            editModalWindowChange(false);
          });
    } else {
      alert('Введите данные!');
    }
  };

  return (
    <div className="edit-modal-window">
      <input
        ype="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title-edit-input"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text-edit-input"
      />
      <button onClick={() => editTask()}>Edit</button>
    </div>
  );
};

export default EditModalWindow;
