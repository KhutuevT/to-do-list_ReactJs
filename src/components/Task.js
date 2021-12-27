import axios from "axios";
import "./Task.css";

const Task = ({
  getAllTasks,
  title,
  text,
  id,
  isCheck,
  editModalWindowChange,
  oldTitleChange,
  oldTextChange,
}) => {
  const PORT = 8000;
  const deleteTasksUrl = `http://localhost:${PORT}/deleteTask`;
  const patchUpdateTask = `http://localhost:${PORT}/updateTask`;

  const deleteTask = async () => {
    await axios.delete(deleteTasksUrl, { params: { id } }).then((res) => {
      getAllTasks();
    });
  };

  const editTask = () => {
    editModalWindowChange(id);
    oldTitleChange(title);
    oldTextChange(text);
  };

  const onCheck = async () => {
    await axios
      .patch(patchUpdateTask, { id, isCheck: !isCheck })
      .then((res) => {
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
          onClick={() => onCheck()}
        />
        <div className="title-div">
          <h3>{`${title}`}</h3>
        </div>
      </div>

      <p>{`${text}`}</p>

      <div className="card-buttons">
        {!isCheck ? <button onClick={() => editTask()}>Edit</button> : null}
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
