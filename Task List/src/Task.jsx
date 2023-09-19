import React, { useState } from "react";

function Task({ task, removeTask }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      {completed ? <del>{task.text}</del> : task.text}
      <button onClick={() => removeTask(task)}>Delete</button>
    </li>
  );
}

export default Task;
