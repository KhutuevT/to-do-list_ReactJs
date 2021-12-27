import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateTask from './components/CreateTask';
import TasksContainer from './components/TasksContainer';
import EditModalWindow from './components/EditModalWindow';
import './App.css';

const URL = process.env.REACT_APP_LOCAL_URL;

const App = () => {
  const [editOpen, seteditOpen] = useState(false);
  const [oldTitle, setOldTitle] = useState('');
  const [oldText, setOldText] = useState('');
  const [tasks, setTasks] = useState([]);

  const getAllTasksUrl = `${URL}/allTasks`;

  const getAllTasks = React.useCallback(async () => {
    await axios.get(getAllTasksUrl).then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  const oldTitleChange = (title) => setOldTitle(title);

  const oldTextChange = (text) => setOldText(text);

  const editModalWindowChange = (isOpen) => seteditOpen(isOpen);

  const editModelWindowClose = () => seteditOpen(false);

  useEffect(async () => {
    getAllTasks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
      </header>

      <div className="main-div">
        <CreateTask getAllTasks={getAllTasks} />
        {editOpen ? (
          <div>
            <EditModalWindow
              id={editOpen}
              getAllTasks={getAllTasks}
              editModalWindowChange={editModalWindowChange}
              oldTitle={oldTitle}
              oldText={oldText}
            />
            <div className="cover" onClick={editModelWindowClose} />
          </div>
        ) : null}
        <TasksContainer
          tasks={tasks}
          getAllTasks={getAllTasks}
          editModalWindowChange={editModalWindowChange}
          oldTitleChange={oldTitleChange}
          oldTextChange={oldTextChange}
        />
      </div>
    </div>
  );
};

export default App;
