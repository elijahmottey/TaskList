import { useState } from "react"


function TaskList({item}) {
  const[completed,setCompleted]=useState(false)
  const handleChange =()=>{
    setCompleted(true)
  }
  return (
    <div>
     <input type="checkbox" checked={completed} onChange={handleChange}  />
      {item.task}
    </div>
  )
}

export default TaskList
