import { useState } from "react";

function TaskList({ item }) {
  const [completed, setCompleted] = useState(item.completed);

  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {item.task}
    </div>
  );
}

export default TaskList;
