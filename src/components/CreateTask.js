import React, {useState} from 'react';
import axios from 'axios';
import './CreateTask.css';

// eslint-disable-next-line react/prop-types
const CreateTask = ({getAllTasks}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const PORT = 8000;
  const postCreateTaskUrl = `http://localhost:${PORT}/createTask`;

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
            setTitle('');
            setText('');
          });
    } else {
      alert('Введите данные!');
    }
  };

  return (
    <div className="create-task">
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
      <button onClick={() => addNewTask()}>Add</button>
    </div>
  );
};

export default CreateTask;
