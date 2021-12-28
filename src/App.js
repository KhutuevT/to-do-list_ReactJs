import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
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
        <p>Todo List</p>
      </header>
      <Switch>
        <Route path="/edit/:id">
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
