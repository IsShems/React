import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [updatedTaskText, setUpdatedTaskText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleComplete = (task) => {
    onUpdate({ ...task, completed: true });
  };

  const handleUpdate = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTaskText(task.text);
  };

  const handleSaveUpdate = () => {
    onUpdate({ id: editingTaskId, text: updatedTaskText });
    setEditingTaskId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <div>
              <input
                type="text"
                value={updatedTaskText}
                onChange={(e) => setUpdatedTaskText(e.target.value)}
              />
              <button onClick={handleSaveUpdate}>Save</button>
            </div>
          ) : (
            <div>
              {task.text}
              <button onClick={() => onDelete(task.id)}>Delete</button>
              {!task.completed && (
                <button onClick={() => handleComplete(task)}>Complete</button>
              )}
              <button onClick={() => handleUpdate(task)}>Update</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
