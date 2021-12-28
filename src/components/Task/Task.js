/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../controllers/API";
import "./Task.css";

const Task = ({
  getAllTasks,
  title,
  text,
  id,
  isCheck,
  setOpeningTaskId,
  oldTitleChange,
  oldTextChange,
}) => {
  const history = useHistory();
  const deleteTask = async () => {
    await API.deleteTask(id).then((res) => {
      getAllTasks();
    });
  };

  const editTask = () => {
    setOpeningTaskId(id);
    oldTitleChange(title);
    oldTextChange(text);
    history.push(`edit/${id}`);
  };

  const onCheck = async () => {
    await API.taskIsCheckUpdate(id, !isCheck).then((res) => {
      getAllTasks();
    });
  };

  return (
    <div className={`task-card task-is-${!isCheck}`} key={`task-${id}`}>
      <div className="task-header">
        <input
          checked={isCheck}
          type="checkbox"
          className={`checkbox-${id}`}
          onChange={() => onCheck()}
        />
        <div className="title-div">
          <h3>{`${title}`}</h3>
        </div>

        {!isCheck ? (
          <img
            className="edit-img"
            onClick={() => editTask()}
            src="https://img.icons8.com/material-sharp/24/ffffff/edit.png"
          />
        ) : null}
        <img
          className="delete-img"
          onClick={() => deleteTask()}
          src="https://img.icons8.com/material-rounded/24/ffffff/filled-trash.png"
        />
      </div>

      <p>{`${text}`}</p>
    </div>
  );
};

export default Task;
