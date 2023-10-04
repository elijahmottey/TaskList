import React, { useState } from "react";

const AddTask = ({ handleAdd }) => {
  const [taskText, setTaskText] = useState(""); // Initialize task text

  const handleInput = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (taskText.trim() !== "") {
      handleAdd(taskText); // Call the handleAdd function to add the task
      setTaskText(""); // Clear the input field
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={taskText}
          placeholder="Add Task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
