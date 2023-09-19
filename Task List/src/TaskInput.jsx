import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name of a new task:"
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

export default TaskInput;
