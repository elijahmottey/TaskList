import TaskList from "./TaskList";

function Tasks({ tasksData }) {
  console.log(tasksData)
  return (
    <div>
      {tasksData.map((item) => (
        <TaskList key={item.id}
         
         item= {item}
        />
      ))}
    </div>
  );
}

export default Tasks
