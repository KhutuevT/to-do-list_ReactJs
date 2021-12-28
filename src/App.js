import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import './App.css';

const App = () => {
  const [openingTaskId, setOpeningTaskId] = useState('');
  const [oldTitle, setOldTitle] = useState('');
  const [oldText, setOldText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home"> <p>Todo List</p></Link>
      </header>
      <Switch>
        <Route path="/edit">
          <Edit
            openingTaskId={openingTaskId}
            oldTitle={oldTitle}
            oldText={oldText}
          />
        </Route>
        <Route path="/home">
          <Home
            setOpeningTaskId = {setOpeningTaskId}
            setOldTitle = {setOldTitle}
            setOldText = {setOldText}
          />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default App;
