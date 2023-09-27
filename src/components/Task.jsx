


function Tasks({tasksData}) {
  return (
    <div> 
      {tasksData.map((item)=>{
         const result = <p key={item.id}>
           <input type="checkbox"
           checked={item.completed}
           
           /> 
           
           {item.task}
           
           </p>
         return result
      })}
    </div>
  )
}

export default Tasks
