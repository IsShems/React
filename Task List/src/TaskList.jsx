import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <Task key={index} task={task} removeTask={ (taskToRemove) => {
          const updatedTasks = props.tasks.filter((task) => task !== taskToRemove);
          props.setTasks(updatedTasks);
        }} />
      ))}
    </ul>
  );
}

export default TaskList;
