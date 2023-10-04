import TaskList from './TaskList'; 
function Tasks({ tasksData }) {
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
        <TaskList key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Tasks;
