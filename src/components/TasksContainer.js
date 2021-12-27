/* eslint-disable react/prop-types */
import React from 'react';
import Task from './Task';
import './TasksContainer.css';

const TasksContainer = ({
  tasks,
  getAllTasks,
  editModalWindowChange,
  oldTitleChange,
  oldTextChange,
}) => {
  tasks.sort((a, b) => {
    if (a.isCheck === true) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <Task
          key={`task-${index}`}
          title={task.title}
          text={task.text}
          id={task._id}
          isCheck={task.isCheck}
          getAllTasks={getAllTasks}
          editModalWindowChange={editModalWindowChange}
          oldTitleChange={oldTitleChange}
          oldTextChange={oldTextChange}
        />
      ))}
    </div>
  );
};

export default TasksContainer;
