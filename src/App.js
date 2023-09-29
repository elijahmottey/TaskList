// App.js
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Task';
import Task from './data/Task';
import AddTask from './components/addTask'

function App() {
  const userName = "Elijah Mottey"

  // useState
  const [tasksData, setTasksData] = useState(Task)

  if (tasksData === '' || tasksData.length === 0) {
    return (
      <>
        <Header userName={userName} />
        <button type='submit'>Add task</button>
        <h1>No data</h1>
      </>
    )
  }

  const handleValue = (task) => {
    task.id = uuidv4()
    setTasksData([...tasksData, task])
  }

  return (
    <>
      <Header userName={userName} />
      <AddTask handleValue={handleValue} /> {/* Change prop name to "handleValue" */}
      <Tasks tasksData={tasksData} />
    </>
  );
}

export default App;
