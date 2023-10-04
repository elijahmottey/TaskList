import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Task';
import Task from './data/Task';
import AddTask from './components/addTask';


function App() {
  const userName = "Elijah Mottey";

  // useState for tasksData
  const [tasksData, setTasksData] = useState(Task);

  // Function to add a new task
  const handleAdd = (taskText) => {
    const newTask = {
      id: uuidv4(),
      task: taskText,
      completed: false,
    };

    setTasksData([...tasksData, newTask]);
  };

  return (
    <>
      <Header userName={userName} />
      <AddTask handleAdd={handleAdd} />
      <Tasks tasksData={tasksData} />
    </>
  );
}

export default App;
