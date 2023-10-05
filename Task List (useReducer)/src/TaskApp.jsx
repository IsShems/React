import React, { useReducer, useState } from 'react';
import './TaskApp.css'; 


const initialState = {
  tasks: [],
  filter: 'all', // 'all', 'completed', 'active'
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

function TaskApp() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const handleSetFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'all') {
      return true;
    } else if (state.filter === 'completed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  return (
    <div className="task-app">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        <button onClick={() => handleSetFilter('all')}>All</button>
        <button onClick={() => handleSetFilter('completed')}>Completed</button>
        <button onClick={() => handleSetFilter('active')}>Active</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.text}
            <div>
              <button onClick={() => handleToggleTask(task.id)}>
                {task.completed ? 'Uncheck' : 'Check'}
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
