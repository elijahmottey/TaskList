import { useState } from "react";
import { FaTimes } from 'react-icons/fa'

function TaskList({ item, handleDelete   }) {
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted((true)? window.confirm("Are you done with this task"):null);
  };




  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {item.task}
      <button onClick={()=>handleDelete(item.id)}> <FaTimes color="red"/></button>
    </div>
  );
}

export default TaskList;
