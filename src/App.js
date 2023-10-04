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

  

  const handleAdd = (task) => {
     task.id = uuidv4()
     setTasksData([task, ...tasksData])
  
  }

  const deleteTask=(id)=>{
    if(window.confirm("Are you sure you want to delete this task?")){
      setTasksData(tasksData.filter((item)=>item.id !== id))
    }
  }

  return (
    <>
      <Header userName={userName} />
      <AddTask handleValue={handleAdd} /> {/* Change prop name to "handleValue" */}
      <Tasks tasksData={tasksData} handleDelete={deleteTask} />
    </>
  );
}

export default App;
