import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;

