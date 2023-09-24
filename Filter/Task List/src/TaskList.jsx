import React, { useState, useEffect } from 'react';

const TaskList = () => {
  const initialTasks = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Sleep' },
    { id: 3, name: 'Eat' },
    { id: 4, name: 'Meeting with friends' },
    { id: 5, name: 'Study' },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    
    const filteredTasks = initialTasks.filter((task) =>
      task.name.toLowerCase().includes(filter.toLowerCase())
    );
    setTasks(filteredTasks);

  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h1>Task List with filter: </h1>
      <input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
