import React, { useState, useEffect } from "react";
import { TwitterPicker } from "react-color";
import axios from "axios";
import "./CreateTask.css";

const CreateTask = ({ getAllTasks }) => {
  const PORT = 8000;
  const postCreateTaskUrl = `http://localhost:${PORT}/createTask`;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [displayColorPicker, setdisplayColorPicker] = useState("");

  const addNewTask = async () => {
    await axios
      .post(postCreateTaskUrl, {
        title,
        text,
        color,
        isCheck: false,
      })
      .then((res) => {
        getAllTasks();
        setTitle("");
        setText("");
      });
  };

  const handleClick = () => {
    setdisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setdisplayColorPicker(false);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const popover = {
    // position: 'absolute',
    // zIndex: '2',
  };
  const cover = {
    // position: 'fixed',
    // top: '0px',
    // right: '0px',
    // bottom: '0px',
    // left: '0px',
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

      <button onClick={handleClick}>Pick Color</button>

      {displayColorPicker ? (
        //TODO потом понять как его передвинуть нормально
        <div style={popover}>
 
            className="color-piker-div"
            style={cover}
            onClick={handleClose}

          <TwitterPicker onChangeComplete={handleChangeComplete} />
        </div>
      ) : null}
    </div>
  );
};

export default CreateTask;
