import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from './actions';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }
    if (filter === 'completed') {
      return task.completed;
    }
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <h1>Task List (Redux)</h1>
      <TaskForm onAdd={(task) => dispatch(addTask(task))} />
      <TaskList
        tasks={filteredTasks}
        onDelete={(taskId) => dispatch(deleteTask(taskId))}
        onUpdate={(task) => dispatch(updateTask(task))}
      />
      <TaskFilters filter={filter} onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;

