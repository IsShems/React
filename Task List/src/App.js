import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput"; 

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };
  
  
  return (
    <div>
      <h1>Task List:</h1>
      <TaskInput addTask={addTask} /> {}
      <TaskList tasks={tasks} setTasks={setTasks}/> 
    </div>
  );
}

export default App;
