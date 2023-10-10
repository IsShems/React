import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from './tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdate = (id, newText) => {
    dispatch(updateTask({ id, text: newText }));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <button
            onClick={() => {
              const newText = prompt('Enter new text:', task.text);
              if (newText) {
                handleUpdate(task.id, newText);
              }
            }}
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
