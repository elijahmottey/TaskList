import TaskList from './TaskList'; 
function Tasks({ tasksData,handleDelete }) {
  if (tasksData === '' || tasksData.length === 0) {
    return (
      <>
        <h1>No tasks</h1>
      </>
    );
  }

  return (
    <div>
      {tasksData.map((item) => (
        <TaskList key={item.id} item={item}
        handleDelete={handleDelete}
         />
      ))}
    </div>
  );
}

export default Tasks;
