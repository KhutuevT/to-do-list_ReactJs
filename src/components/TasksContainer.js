/* eslint-disable react/prop-types */
import React from "react";
import Task from "./Task";
import "./TasksContainer.css";

const TasksContainer = ({
  tasks,
  getAllTasks,
  setOpeningTaskId,
  oldTitleChange,
  oldTextChange,
}) => {
  tasks.sort((a, b) =>
    a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0
  );
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
          setOpeningTaskId={setOpeningTaskId}
          oldTitleChange={oldTitleChange}
          oldTextChange={oldTextChange}
        />
      ))}
    </div>
  );
};

export default TasksContainer;
