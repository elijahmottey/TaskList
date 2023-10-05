import { useState } from "react";
import { FaTimes } from 'react-icons/fa'

function TaskList({ item, handleDelete   }) {
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted((true)? window.confirm("Are you done with this task"):null);
  };




  return (
    <div className="task">
      <input type="checkbox" checked={completed} onChange={handleChange} className="checkbox"/>
      {item.task}
      <button className="cancel" onClick={()=>handleDelete(item.id)}> <FaTimes color="red"/></button>
    </div>
  );
}

export default TaskList;
