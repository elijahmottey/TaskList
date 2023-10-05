// AddTasks.js
import React, { useState } from "react";

const AddTasks = ({ handleValue }) => { // Change prop name to "handleValue"
  const [taskText, setTaskText] = useState(""); // Initialize task text

  const handleInput = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
   if(taskText.trim()!== ""){
    const newTask = {
      task:taskText,
      completed: false 
    }
    handleValue(newTask);
   }
   
  
  

    // Clear the input field
    setTaskText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={taskText}
          placeholder="Add Task"
          className="addtask"
        />
        <button className="add-b" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTasks;
